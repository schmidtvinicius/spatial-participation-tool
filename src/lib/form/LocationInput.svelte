<script lang="ts">
	import Map from '$lib/map/Map.svelte';
	import TextField from './TextField.svelte';
	import { PIN_ADDRESS_PLACEHOLDER } from '$lib/assets/text/strings';
	import NumberField from './NumberField.svelte';

	export let required = false;
	let pinLat: number;
	let pinLng: number;

	const handleMapClicked = (e: CustomEvent) => {
		pinLat = e.detail.latLng.lat;
		pinLng = e.detail.latLng.lng;
		console.log(pinLat);
		console.log(pinLng);
	};
</script>

<div id="location-input">
	<div class="map-container">
		<Map on:mapClicked={handleMapClicked} />
	</div>
	<TextField
		name="Pin address"
		id="pin-address"
		placeholder={PIN_ADDRESS_PLACEHOLDER}
		disabled={true}
		label="Address"
		{required}
	/>
	<div class="coordinates-section">
		<NumberField name="Pin latitude" id="pin-lat" {required} bind:value={pinLat} />
		<NumberField name="Pin longitude" id="pin-lng" {required} bind:value={pinLng} />
	</div>
</div>

<style>
	.map-container {
		height: 50vh;
		margin-bottom: 1em;
	}

	.coordinates-section {
		display: none;
	}
</style>
