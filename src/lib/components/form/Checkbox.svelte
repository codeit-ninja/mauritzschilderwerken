<script lang="ts">
    import type { FormFields } from "$directus";
    import { randomID } from "$lib/utils";

    type Checkbox = Omit<FormFields, 'options'> & {
        options: { key: string; value: string; }[]
    }

    export let field: Checkbox;
    
    const id = randomID();
    const { required, label, options, name } = field;
</script>
<div class="mb-0">
    {#if label}
        <label class="d-block form-label mt-5" for={id}>{ label }</label>
    {/if}
    <div class="row mt-4">
        {#each options as option, i}
            <div class="col-6">
                <div class="form-check my-2">
                    <input 
                        class="form-check-input" 
                        type="checkbox"
                        value={option.value}
                        id={`${id}-${i}`}
                        name={`${name}`}
                        {required}
                    />
                    <label class="form-check-label" for={`${id}-${i}`}>
                        {option.key}
                    </label>
                </div>
            </div>
        {/each}
    </div>
</div>