<script lang="ts">
    import { randomID } from "$lib/utils";

    type Text = {
        required: boolean;
        label: string | null;
        defaultValue: string | null;
        placeholder: string | null;
    }

    export let field: Text;

    const id = randomID();
    const { placeholder, required, label, defaultValue } = field;
</script>
<div class="mb-3">
    {#if label}
        <label class="form-label" for={id}>{ label }</label>
    {/if}
    <input type="text" {placeholder} {required} {id} class="form-control" />
</div>