<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import type L from 'leaflet';
	import type { LeafletMouseEvent, Marker } from 'leaflet';
	import { createEventDispatcher } from 'svelte';
	import fetchAddress from '$lib/assets/_external/_addressUtil';
	import { PIN_OUT_OF_BOUNDS } from '$lib/assets/text/strings';

	export let center: L.LatLngTuple = [52.156111, 5.387827];
	export let maxBounds: L.LatLngBoundsExpression = [
		[50.750417, 3.358333],
		[53.555, 7.227778]
	];
	export let zoomControl = true;
	export let scrollWheelZoom = true;
	export let dragging = true;
	export let clickable = false;

	let placeableMarker: Marker;

	const dispatch = createEventDispatcher();

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');

			const mapProps: L.MapOptions = {
				maxBounds,
				zoomControl,
				scrollWheelZoom,
				dragging,
				center,
				zoom: 0
			};

			const map = L.map('map', mapProps);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			map.setMinZoom(map.getBoundsZoom(maxBounds, true));

			if (clickable) {
				map.on('click', (e: LeafletMouseEvent) => {
					fetchAddress(e.latlng.lat, e.latlng.lng)
						.then((address) => {
							if (placeableMarker) map.removeLayer(placeableMarker);
							placeableMarker = L.marker(e.latlng).addTo(map);
							map.flyTo(e.latlng, map.getZoom());
							dispatch('click', { latLng: e.latlng, address: address });
						})
						.catch(() => alert(PIN_OUT_OF_BOUNDS));
				});
			}
		}
	});
</script>

<div id="map" />

<style>
	@import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
	#map {
		z-index: 1;
		width: 100%;
		height: 100%;
	}
</style>
