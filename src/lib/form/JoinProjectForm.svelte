<script>
	import {
		ACCESS_CODE_LABEL,
		ACCESS_CODE_PLACEHOLDER,
        PARTICIPATE
	} from '$lib/assets/text/strings';
	import TextField from './TextField.svelte';
	import SubmitButton from './SubmitButton.svelte';
</script>

<form>
	<div class="access-code-input">
		<TextField
			id="access-code"
			name="access_code"
			placeholder={ACCESS_CODE_PLACEHOLDER}
			required={true}
			label={ACCESS_CODE_LABEL}
		/>
	</div>
    <div class="submit-button">
        <SubmitButton content={PARTICIPATE}/>
    </div>
</form>

<style>
	form {
        width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
        padding-bottom: 1em;
	}

    div {
        width: 45%;
    }

    .access-code-input {
        display: flex;
        justify-content: flex-start;
    }

    .submit-button {
        display: flex;
        justify-content: flex;
    }
</style>
