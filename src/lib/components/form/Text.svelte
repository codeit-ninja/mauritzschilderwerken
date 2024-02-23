<script lang="ts">
    import type { FormFields } from "$directus";
    import { randomID } from "$lib/utils";

    type Text = {
        required: boolean;
        label: string | null;
        defaultValue: string | null;
        placeholder: string | null;
    }

    export let field: FormFields;

    const id = randomID();
    const { label } = field;
</script>
<div class="mb-0">
    {#if label}
        <label class="d-block form-label mt-5" for={id}>{ label }</label>
    {/if}
    <input 
        type="text"
        {...field}
        {id}
        class="form-control"
    />
</div>