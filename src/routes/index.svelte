<script>
	import Map from '$lib/map/Map.svelte';
</script>

<main id="home-page">
	<div id="map-container">
		<Map />
	</div>
</main>

<style>
	#map-container {
		position: fixed;
		width: 90%;
		left: 10%;
        top: 0;
	}
</style>
