<script lang="ts">
    import type { Forms, FormsFields } from "$directus";
    import Number from "./form/Number.svelte";
    import Text from "./form/Text.svelte";
    import Textarea from "./form/Textarea.svelte";

    type Fields = Omit<FormsFields, 'item'> & {
        item: {
            required: boolean;
            label: string | null;
            defaultValue: string | null;
            placeholder: string | null;
        }
    }

    export let fields: Fields[];
    export let title: string;

    console.log(fields)
</script>

<form>
    <h6 class="text-primary">{ title }</h6>
    {#each fields as field}
        {#if field.collection === 'text'}
            <Text field={field.item} />
        {/if}
        {#if field.collection === 'number'}
            <Number field={field.item} />
        {/if}
        {#if field.collection === 'textarea'}
            <Textarea field={field.item} />
        {/if}
    {/each}
</form>