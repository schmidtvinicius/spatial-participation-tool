<script lang="ts">
	export let name: string;
	export let id: string;
	export let placeholder: string;
	export let required = false;
	export let label: string;
	export let onInvalid = (e: Event) => {
		console.log(e);
	};
</script>

<div>
	<label for={id}>{label}</label>
	<input type="text" {name} {id} {placeholder} {required} {onInvalid} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		padding: 1em 0;
	}

	input {
		margin-top: 0.5em;
		padding-left: 1em;
		border-radius: 5px;
		border-width: 1px;
		border-color: lightgray;
		height: 3em;
		vertical-align: top;
	}
</style>
