<script lang="ts">
	import { PARTICIPATE } from '$lib/assets/text/strings';
	export let content = 'Submit';
</script>

<button>{content}</button>

<style>
	button {
		background-color: var(--myBlue);
		color: white;
		width: 100%;
		border: 0px;
	}
</style>
