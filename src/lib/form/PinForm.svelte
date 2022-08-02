<script lang="ts">
	import { GENERAL_FORM_HEADER } from '$lib/assets/text/strings';
	import LocationInput from '$lib/form/LocationInput.svelte';
	import TextField from '$lib/form/TextField.svelte';
	import TextArea from '$lib/form/TextArea.svelte';
	import FeedbackRadioGroup from '$lib/form/FeedbackRadioGroup.svelte';
	import UploadButton from '$lib/form/UploadButton.svelte';

	let title: string;
	let motivation: string;
	let lat: number;
	let lng: number;

	const handleMapClicked = (e: CustomEvent) => {
		lat = e.detail.latLng.lat;
		lng = e.detail.latLng.lng;
		console.log(lat);
		console.log(lng);
	};
</script>

<form>
	<h1>{GENERAL_FORM_HEADER}</h1>
	<section>
		<h2>Location</h2>
		<LocationInput on:mapClicked={handleMapClicked} />
	</section>
	<section>
		<h2>What do you think of this place?</h2>
		<FeedbackRadioGroup />
		<TextField name="Title" id="pin-title" placeholder="Title" required={true} label={'Title'} />
		<TextArea
			name="Motivation"
			id="motivation"
			placeholder="Motivation"
			required={true}
			label="Motivation"
		/>
		<UploadButton id="picture" name="picture" label="Picture" />
	</section>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		box-shadow: var(--myBoxShadow);
		width: 60%;
		margin: 5em 20%;
		height: fit-content;
		padding: 1em;
	}

	h1,
	h2 {
		color: var(--myBlue);
	}

	section {
		margin-top: 1em;
	}
</style>
