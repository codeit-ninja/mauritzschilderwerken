<script lang="ts">    
    import type { LayoutData } from './$types';

    import 'material-symbols';

    import '../scss/bootstrap.scss';
    import '../scss/app.scss';
    
    import { onMount } from 'svelte';
    import Image from '$lib/components/blocks/partials/Image.svelte';

    export let data: LayoutData;

    onMount( async () => {
        await import('bootstrap')
    })
</script>
<svelte:head>
    <title>{data.page.seo.title}</title>
    <meta name="description" content={data.page.seo.description} />
</svelte:head>
<slot />

<div class="site--footer">
    <div class="container">
        <div class="row gy-5">
            <div class="col-lg-12 col-xl-4 text-center text-lg-start">
                <Image image={ data.site.logoDark } rounded={ false } />
            </div>
            <div class="col-lg-6 col-xl-5 d-flex justify-content-center justify-content-lg-start text-center text-lg-start flex-column flex-lg-row gap-5">
                <div class="d-flex flex-column gap-3">
                    {#each data.menu as item}
                        {#if item.isButton === false && item.collection}
                            <a
                                href={`/${item.collection.slug}`}
                                class="text-uppercase"
                            >{ item.collection.name }</a>
                        {/if}
                    {/each}
                </div>
                <div class="d-flex flex-column gap-3">
                    {#each data.site.socials as social}
                        <a href={social.URL} target="_blank">{social.Name}</a>
                    {/each}
                </div>
            </div>
            <div class="col-lg-6 col-xl-3">
                {#each data.site.contact_links as link, i}
                    <a
                        href={link.URL} 
                        class="btn mb-2 d-block text-center"
                        class:btn-dark={i === 0}
                        class:btn-outline-dark={i === 1}
                        target="_blank"
                    >
                        {link.name}
                    </a>
                {/each} 
            </div>
        </div>
        <hr />
        <div class="row gy-3">
            <div class="col-lg-5 d-flex justify-content-center justify-content-lg-start">
                <span class="fs-6">© {new Date().getFullYear()} Mauritz Schilderwerken</span>
            </div>
            <div class="col-lg-7 d-flex gap-5 justify-content-center justify-content-lg-end">
                <span class="fs-6">Webdesign: <a href="https://inneractive.nl/" target="_blank">Inneractive</a></span>
                <span class="fs-6">Development: <a href="https://codeit.ninja/" target="_blank">Code IT</a></span>
            </div>
        </div>
    </div>
</div>