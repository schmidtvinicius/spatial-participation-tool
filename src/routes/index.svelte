<script>
	import Map from '$lib/map/Map.svelte';
	import GreetingDialog from '$lib/dialog/GreetingDialog.svelte';
</script>

<main>
	<div class="map-container">
		<Map />
		<div class="greeting-dialog">
			<GreetingDialog />
		</div>
	</div>
</main>

<style>
	.map-container {
		position: fixed;
		width: 90%;
		left: 10%;
		top: 0;
	}

	.greeting-dialog {
		right: 2%;
		bottom: 2%;
		position: fixed;
		z-index: 2;
	}
</style>
