<script lang="ts">
	import Map from '$lib/map/Map.svelte';
	import TextField from './TextField.svelte';
	import { PIN_ADDRESS_PLACEHOLDER } from '$lib/assets/text/strings';

	export let required = false;
</script>

<div id="location-input">
	<div class="map-container">
		<Map />
	</div>
	<TextField
		name="Pin address"
		id="pin-address"
		placeholder={PIN_ADDRESS_PLACEHOLDER}
		readOnly={true}
        label="Address"
		{required}
	/>
</div>

<style>
	.map-container {
		height: 50vh;
		margin-bottom: 1em;
	}
</style>
