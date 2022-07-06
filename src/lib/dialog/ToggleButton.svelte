<script lang="ts">
	import { faQuestion } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	const dispatch = createEventDispatcher();
</script>

<button class="toggle-dialog" on:click={() => dispatch('toggle')}>
	<Fa icon={faQuestion} size="2x" />
</button>

<style>
	.toggle-dialog {
		display: block;
		border-radius: 50%;
		border: none;
		color: white;
		padding: 1em;
		width: 4em;
		height: 4em;
		align-content: center;
		background-color: var(--myBlue);
	}
</style>
