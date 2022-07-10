<script lang="ts">
	export let href: string;
	export let content = 'Navigate';
</script>

<a {href}>{content}</a>

<style>
	a {
        display: flex;
        justify-content: center;
        align-items: center;
		background-color: var(--myBlue);
		color: white;
		width: 100%;
		border-radius: 5px;
		height: 40px;
		padding: 0px;
	}
</style>
