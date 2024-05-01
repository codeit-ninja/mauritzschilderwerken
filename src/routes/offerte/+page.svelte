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

    let emailSend = false;

    const emailSendSuccess = () => {
        emailSend = true;
    }
</script>
<div class="bg-black rounded-4 text-white my-3 px-4 page--offerte">
    {#if emailSend}
        <div class="container">
            <div class="alert alert-info">
                Uw bericht is succesvol verstuurd, wij nemen zo snel mogelijk contact met u op.
            </div>
        </div>
    {:else}
        <div class="container">
            <div class="row g-5">
                <div class="col-md-5">
                    {@html data.page.content}
                    {#if data.page.form}
                        <Form 
                            id={data.page.form.id} 
                            fields={data.page.form.fields} 
                            title={data.page.form.name}
                            on:send={emailSendSuccess}
                        />
                    {/if}
                </div>
                <div class="col-md-7">
                    <div class="d-flex flex-column h-100 ps-lg-5">
                        <div class="mb-5" >
                            <Image image={data.page.topImage} type="background" />
                        </div>
                        <div>
                            <Image image={data.page.bottomImage} type="background" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>