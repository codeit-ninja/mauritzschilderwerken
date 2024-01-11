<script lang="ts">
    import { randomID } from "$lib/utils";

    type Checkbox = {
        required: boolean;
        label: string | null;
        values: { label: string; value: string }[]
    }

    export let field: Checkbox;
    
    const id = randomID();
    const { required, label, values } = field;
</script>
<div class="mb-0">
    {#if label}
        <label class="d-block form-label mt-5" for={id}>{ label }</label>
    {/if}
    <div class="row mt-4">
        {#each values as checkbox, i}
            <div class="col-6">
                <div class="form-check my-2">
                    <input class="form-check-input" type="checkbox" value={checkbox.value} id={`${id}-${i}`}>
                    <label class="form-check-label" for={`${id}-${i}`}>
                        {checkbox.label}
                    </label>
                </div>
            </div>
        {/each}
    </div>
</div>