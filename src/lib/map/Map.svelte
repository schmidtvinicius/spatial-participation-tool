<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import type L from 'leaflet';
	import type { LeafletMouseEvent } from 'leaflet';

	export let center: L.LatLngTuple = [52.156111, 5.387827];
	export let maxBounds: L.LatLngBoundsExpression = [
		[50.750417, 3.358333],
		[53.555, 7.227778]
	];
	export let zoomControl = true;
	export let scrollWheelZoom = true;
	export let dragging = true;
	export let onClick = (e: LeafletMouseEvent) => {
		console.log(e);
	};

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

			map.on('click', onClick);
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
