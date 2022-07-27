<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
	import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
</script>

<div id="radio-group">
	<div class="button-container">
		<input type="radio" id="like-button" name="like" value={true} checked />
		<label for="like-button">
			<Fa icon={faThumbsUp} />
			Pretty
		</label>
	</div>
	<div class="button-container">
		<input type="radio" id="dislike-button" name="like" value={false} />
		<label for="dislike-button">
			<Fa icon={faThumbsDown} />
			Not so pretty
		</label>
	</div>
</div>

<style>
	#radio-group {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1em;
	}

    input {
		display: none;
	}

	input + label {
		opacity: 0.3;
	}

	input:checked + label {
		opacity: 1;
	}

	label {
		display: inline-block;
		border-radius: 20px;
		color: white;
		width: 130px;
		padding: 8px 0px;
		text-align: center;
		cursor: pointer;
	}

    label[for="like-button"] {
        background-color: var(--myGreen);
    }

    label[for="dislike-button"] {
        background-color: var(--myRed);
    }
</style>
