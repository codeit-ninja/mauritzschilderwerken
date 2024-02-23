<script lang="ts">
    import type { FormFields } from "$directus";
    import { randomID } from "$lib/utils";

    export let field: FormFields;

    const id = randomID();
    const { label } = field;
</script>
<div class="mb-0">
    {#if label}
        <label class="d-block form-label mt-5" for={id}>{ label }</label>
    {/if}
    <textarea 
        {...field}
        {id} 
        rows="8" 
        class="form-control"
    ></textarea>
</div>