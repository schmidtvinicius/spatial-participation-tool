<script lang="ts">
	export let name: string;
	export let id: string;
	export let placeholder: string;
	export let required = false;
	export let disabled = false;
	export let value = '';
	export let label = '';
	export let onInvalid = (e: Event) => {};
</script>

<div class="input-field">
	<label for={id}>{required ? `${label}*` : label}</label>
	<input type="text" {name} {id} {placeholder} {required} {onInvalid} {disabled} {value} />
</div>

<style>
	input {
		margin-top: 0.5em;
		padding-left: 1em;
		border-color: lightgray;
		vertical-align: top;
	}
</style>
