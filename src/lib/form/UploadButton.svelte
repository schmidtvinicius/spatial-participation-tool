<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus, faCamera } from '@fortawesome/free-solid-svg-icons';

	export let id: string;
	export let name: string;
	export let label: string;
	export let required = false;
	let files: FileList;
	$: filePath = files?.item(0)?.name;
</script>

<div class="input-field">
	<label for={id}>
		<Fa icon={filePath ? faCamera : faPlus} />
		{#if filePath}
			{filePath}
		{:else}
			{required ? `${label}*` : label}
		{/if}
	</label>
	<input type="file" accept="image/*" bind:files={files} {id} {name} />
</div>

<style>
	input {
		display: none;
	}

	label {
		width: fit-content;
		border-radius: 5px;
		border: ridge lightgray;
		border-width: 1px;
		height: fit-content;
		padding: 0.5em;
		cursor: pointer;
		color: var(--mySea);
	}
</style>
