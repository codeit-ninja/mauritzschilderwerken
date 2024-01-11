<script lang="ts">
    import type { Forms, FormsFields } from "$directus";
    import Checkbox from "./form/Checkbox.svelte";
    import Number from "./form/Number.svelte";
    import Text from "./form/Text.svelte";
    import Textarea from "./form/Textarea.svelte";

    type Fields = Omit<FormsFields, 'item'> & {
        item: {
            required: boolean;
            label: string | null;
            defaultValue: string | null;
            placeholder: string | null;
            values: { label: string; value: string }[]
        }
    }

    type Values = {
        text: Record<string, string>;
    }

    export let fields: FormsFields[];
    export let title: string;
    export let values: Values = {
        text: {}
    }

    const submit = () => {
        console.log(values)
    }

    console.log(fields)
</script>

<form on:submit|preventDefault={submit}>
    <h6 class="text-primary">— { title }</h6>
    {#each fields as field, i}
        {#if field.collection === 'text'}
            <Text field={field.item} bind:value={values.text[field.collection]} />
        {/if}
        {#if field.collection === 'number'}
            <Number field={field.item} />
        {/if}
        {#if field.collection === 'textarea'}
            <Textarea field={field.item} />
        {/if}
        {#if field.collection === 'checkbox'}
            <Checkbox field={field.item} />
        {/if}
    {/each}
    <div class="mt-5">
        <button type="submit" class="btn btn-white">Verzenden</button>
    </div>
</form>