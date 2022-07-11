<script>
	import Map from '$lib/map/Map.svelte';
	import GreetingDialog from '$lib/dialog/GreetingDialog.svelte';
</script>

<main>
	<div class="page">
		<Map />
		<div class="greeting-dialog">
			<GreetingDialog />
		</div>
	</div>
</main>

<style>
	.greeting-dialog {
		right: 1.5%;
		bottom: 2%;
		position: fixed;
		z-index: 2;
	}
</style>
