<script lang="ts">
	const maxLength = 500;
	const wrap = 'hard';
	export let id: string;
	export let name: string;
	export let placeholder: string;
	export let required: boolean;
	export let label: string;
</script>

<div class="input-field">
	<label for={id}>{required ? `${label}*` : label}</label>
	<textarea {id} {name} {placeholder} {required} {maxLength} {wrap} />
</div>

<style>
	textarea {
		height: 100px;
		resize: vertical;
		margin-top: 0.5em;
		padding: 1em;
		border-color: lightgray;
		vertical-align: top;
	}
</style>
