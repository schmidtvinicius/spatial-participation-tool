<script lang="ts">
	export let name: string;
	export let id: string;
	export let placeholder: string;
	export let required = false;
	export let readOnly = false;
	export let label: string;
	export let onInvalid = (e: Event) => {
		console.log(e);
	};
</script>

<div>
	<label for={id}>{label}</label>
	<input type="text" {name} {id} {placeholder} {required} {onInvalid} {readOnly} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	input {
		margin-top: 0.5em;
		padding-left: 1em;
		border-color: lightgray;
		vertical-align: top;
	}
</style>
