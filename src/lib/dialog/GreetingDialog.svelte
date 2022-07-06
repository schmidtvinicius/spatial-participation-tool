<script lang="ts">
	import {
		WELCOME_TEXT,
		EXPLANATION_PARAGRAPH,
		ACCESS_CODE_LABEL,
		ACCESS_CODE_PLACEHOLDER
	} from '$lib/assets/text/strings';
	import TextField from '$lib/form/TextField.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faClose } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="dialog">
	<div class="action-menu">
		<Fa icon={faClose} size="2x" />
	</div>
	<h1>{WELCOME_TEXT}</h1>
	<p>{EXPLANATION_PARAGRAPH}</p>
	<div>
		<form>
			<TextField
				id="access-code"
				name="access_code"
				placeholder={ACCESS_CODE_PLACEHOLDER}
				required={true}
				label={ACCESS_CODE_LABEL}
			/>
		</form>
	</div>
</div>

<style>
	.dialog {
		display: flex;
		flex-direction: column;
		height: fit-content;
		width: 20em;
		padding: 0 1em;
		background-color: #ffffff;
		box-shadow: var(--myBoxShadow);
		border-radius: 10px;
	}

	.action-menu {
		display: flex;
		justify-content: flex-end;
		padding-top: 0.75em;
	}

	h1 {
		text-align: center;
		color: var(--myDarkBlue)
	}

	p {
		text-align: justify;
		color: var(--myDarkBlue)
	}

	form {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
