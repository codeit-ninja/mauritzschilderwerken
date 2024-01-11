<script lang="ts">
    import { randomID } from "$lib/utils";

    type Text = {
        required: boolean;
        label: string | null;
        defaultValue: string | null;
        placeholder: string | null;
    }

    export let field: Text;
    export let value = field.defaultValue;
    
    const id = randomID();
    const { placeholder, required, label, defaultValue } = field;
</script>
<div class="mb-0">
    {#if label}
        <label class="d-block form-label mt-5" for={id}>{ label }</label>
    {/if}
    <input type="number" {placeholder} {required} {id} bind:value={value} class="form-control" />
</div>