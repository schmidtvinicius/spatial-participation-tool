<script lang="ts">
	import { WELCOME_TEXT, EXPLANATION_PARAGRAPH, PLACE_GENERAL_PIN } from '$lib/assets/text/strings';
	import { NEW_GENERAL_PIN_PATH } from '$lib/assets/text/paths';
	import JoinProjectForm from '$lib/form/JoinProjectForm.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faClose } from '@fortawesome/free-solid-svg-icons';
	import OrBlock from './OrBlock.svelte';
	import ToggleButton from './ToggleButton.svelte';
	import SubmitButton from '$lib/form/SubmitButton.svelte';

	let showDialog = true;
</script>

{#if showDialog}
	<div class="dialog">
		<div class="action-menu">
			<div class="close-action" on:click={() => (showDialog = false)}>
				<Fa icon={faClose} size="2x" />
			</div>
		</div>
		<h1>{WELCOME_TEXT}</h1>
		<p>{EXPLANATION_PARAGRAPH}</p>
		<JoinProjectForm />
		<OrBlock />
		<a href={NEW_GENERAL_PIN_PATH}>
			<SubmitButton content={PLACE_GENERAL_PIN} />
		</a>
	</div>
{:else}
	<ToggleButton on:toggle={() => showDialog=true} />
{/if}

<style>
	.dialog {
		display: flex;
		flex-direction: column;
		height: fit-content;
		width: 25em;
		padding: 1em 1em;
		background-color: #ffffff;
		box-shadow: var(--myBoxShadow);
		border-radius: 10px;
	}

	.action-menu {
		display: flex;
		justify-content: flex-end;
		padding-top: 0.75em;
	}

	.close-action {
		cursor: pointer;
	}

	h1 {
		text-align: center;
		color: var(--myDarkBlue);
	}

	p {
		text-align: justify;
		color: var(--myDarkBlue);
		margin-top: 0.5em;
	}
</style>
