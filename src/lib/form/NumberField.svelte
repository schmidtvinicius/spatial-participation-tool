<script lang="ts">
	export let name: string;
	export let id: string;
	export let placeholder = '';
	export let required = false;
	export let disabled = false;
	export let label = '';
	export let value: number;
    // export let min: number;
	// export let max: number;
	export let onInvalid = (e: Event) => {};
</script>

<div class="input-field">
	<label for={id}>{required ? `${label}*` : label}</label>
	<input type="number" {name} {id} {placeholder} {required} {onInvalid} {disabled} {value} />
</div>

<style>
	input {
		margin-top: 0.5em;
		padding-left: 1em;
		border-color: lightgray;
		vertical-align: top;
	}
</style>
