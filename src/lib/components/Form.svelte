<script lang="ts">
    import type { FormFields, FormsFields } from "$directus";
    import { client } from "$lib/directus";
    import { createItem } from "@directus/sdk";
    import Checkbox from "./form/Checkbox.svelte";
    import Number from "./form/Number.svelte";
    import Text from "./form/Text.svelte";
    import Textarea from "./form/Textarea.svelte";

    type Fields = Omit<FormsFields, 'item'> & {
        item: FormFields;
    }

    export let id: number;
    export let fields: Fields[];
    export let title: string;

    const submit = (e) => {
        const formdata = new FormData(e.target);
        const data = Object
            .fromEntries( Array.from( formdata.keys() )
            .map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key)]))

        client.request(
            createItem('form_submissions', {
                form: id,
                data: JSON.stringify( data )
            })
        )
    }
</script>

<form on:submit|preventDefault={submit}>
    <h6 class="text-primary">— { title }</h6>

    {#each fields as field}
        {#if field.item.type === 'string'}
            <Text field={field.item} />
        {/if}
        {#if field.item.type === 'checkbox'}
            <Checkbox field={field.item} />
        {/if}
        {#if field.item.type === 'textarea'}
            <Textarea field={field.item} />
        {/if}
    {/each}
    <div class="mt-5">
        <button type="submit" class="btn btn-white">Verzenden</button>
    </div>
</form>