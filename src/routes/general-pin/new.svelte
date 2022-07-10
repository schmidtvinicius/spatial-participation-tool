<script lang="ts">
	import { GENERAL_FORM_HEADER } from '$lib/assets/text/strings';
	import LocationInput from '$lib/form/LocationInput.svelte';
	import TextField from '$lib/form/TextField.svelte';
</script>

<div>
	<form>
		<h1>{GENERAL_FORM_HEADER}</h1>
		<section>
			<h2>Location</h2>
			<LocationInput />
		</section>
		<section>
			<h2>How do you like this place?</h2>
			<TextField name="Title" id="pin-title" placeholder="Title" required={true} label={'Title'} />
		</section>
	</form>
</div>

<style>
	form {
		position: fixed;
		left: 30%;
		top: 10%;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: var(--myBoxShadow);
		width: 50%;
		height: fit-content;
		padding: 1em;
	}

	div {
		height: 100vh;
	}

	h1,
	h2 {
		color: var(--myBlue);
	}

	section {
		margin-top: 1em;
	}
</style>
