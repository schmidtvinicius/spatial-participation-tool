<script lang="ts">
	import Map from '$lib/map/Map.svelte';
	import TextField from './TextField.svelte';
	import { PIN_ADDRESS_PLACEHOLDER } from '$lib/assets/text/strings';
	import { createEventDispatcher } from 'svelte';

	let currentAddress: string;

	const dispatch = createEventDispatcher();

	const handleMapClicked = async (e: CustomEvent) => {
		currentAddress = e.detail.address;
		dispatch('mapClicked', { latLng: e.detail.latLng });
	};
</script>

<div id="location-input">
	<div class="map-container">
		<Map on:click={handleMapClicked} clickable={true} />
	</div>
	<TextField
		name="Pin address"
		id="pin-address"
		placeholder={PIN_ADDRESS_PLACEHOLDER}
		disabled={true}
		label="Address"
		bind:value={currentAddress}
	/>
</div>

<style>
	.map-container {
		height: 50vh;
		margin-bottom: 1em;
	}
</style>
