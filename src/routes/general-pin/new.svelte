<script lang="ts">
    import { GENERAL_FORM_HEADER } from "$lib/assets/text/strings";
</script>

<form>
    <h1>{GENERAL_FORM_HEADER}</h1>
</form>

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
        padding: 0.5em 1em;
    }

    h1 {
        color: var(--myBlue);
    }
</style>