<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let icon: IconDefinition;
	export let name: string;
	export let link: string;
	export let active = false;
</script>

<a class={active ? 'active' : ''} href={link}>
	<Fa {icon} size="1.8x" />
	<p>{name}</p>
</a>

<style>
	a {
		color: var(--myBlue);
		padding: 1em 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 0.5em;
	}

	a.active {
		color: white;
		background-color: var(--myBlue);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
	}

	a:hover {
		cursor: pointer;
		color: white !important;
		background-color: var(--myBlue);
	}

	p {
		margin: 1em 0 0;
	}
</style>
