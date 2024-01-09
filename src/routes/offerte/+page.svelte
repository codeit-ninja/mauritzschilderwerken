<script lang="ts">
    /**
     * Offerte page template
     */
    import type { PageData } from './$types';
    import Form from '$lib/components/Form.svelte';
    import type { FormsFields } from '$directus';

    type Offerte = PageData & {
        page: {
            form: {
                fields: FormsFields;
                name: string;
            }
        }
    }

    export let data: Offerte;

    console.log(data.page.form)
</script>
<div class="bg-black rounded-4 page--offerte">
    <div class="container">
        <div class="row">
            {#if data.page.form}
            <Form fields={data.page.form.fields} title={data.page.form.name} />
        {/if}
        </div>
    </div>
</div>