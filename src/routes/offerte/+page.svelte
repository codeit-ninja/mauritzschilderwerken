<script lang="ts">
    /**
     * Offerte page template
     */
    import type { PageData } from './$types';
    import Form from '$lib/components/Form.svelte';
    import type { directus_files } from '$directus';
    import Image from '$lib/components/blocks/partials/Image.svelte';

    type Offerte = PageData & {
        page: {
            form: any;
            topImage: directus_files;
            bottomImage: directus_files;
        }
    }
    export let data: Offerte;
</script>
<div class="bg-black rounded-4 text-white my-3 px-4 page--offerte">
    <div class="container">
        <div class="row g-5">
            <div class="col-md-5">
                {@html data.page.content}
                {#if data.page.form}
                    <Form id={data.page.form.id} fields={data.page.form.fields} title={data.page.form.name} />
                {/if}
            </div>
            <div class="col-md-7">
                <div class="d-flex flex-column h-100 ps-5">
                    <div class="mb-5" style="min-height: 800px;">
                        <Image image={data.page.topImage} type="background" />
                    </div>
                    <div style="min-height: 500px;">
                        <Image image={data.page.bottomImage} type="background" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>