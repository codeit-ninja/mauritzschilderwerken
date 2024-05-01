<script lang="ts">
    import type { form_fields, forms_fields } from "$directus";
    import {createEventDispatcher} from 'svelte';
    import { client } from "$lib/directus";
    import { createItem } from "@directus/sdk";
    import Checkbox from "./form/Checkbox.svelte";
    import Text from "./form/Text.svelte";
    import Textarea from "./form/Textarea.svelte";

    type Fields = Omit<forms_fields, 'item'> & {
        item: form_fields;
    }

    export let id: number;
    export let fields: Fields[];
    export let title: string;

    let isSending = false;

    const dispatch = createEventDispatcher();

    const submit = (e: SubmitEvent) => {
        isSending = true;

        const formdata = new FormData(e.target as HTMLFormElement);
        const data = Object
            .fromEntries( Array.from( formdata.keys() )
            .map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key)]))

        client.request(
            createItem('form_submissions', {
                form: id,
                data: JSON.stringify( data )
            })
        )
        .then(() => setTimeout(() => {
                isSending = false
                dispatch('send');
            }, 750)
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
        <button type="submit" class="btn btn-white d-flex align-items-center gap-2">
            {#if isSending}
                <span class="spinner-border spinner-border-sm border-1" aria-hidden="true"></span>
            {/if}
            Verzenden
        </button>
    </div>
</form>