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

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    
    <script defer src="https://umami-g0skwk4.185.208.207.112.sslip.io/script.js" data-website-id="db994ec7-3f49-4039-a7e7-b483b304d9f5"></script>
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
            <div class="col-lg-7 d-flex flex-column flex-md-row gap-2 gap-md-4 justify-content-center justify-content-lg-end">
                <span class="fs-6 text-center text-md-start">Webdesign: <a href="https://inneractive.nl/" target="_blank">Inneractive</a></span>
                <span class="fs-6 text-center text-md-start">Development: <a href="https://codeit.ninja/" target="_blank">Code IT</a></span>
            </div>
        </div>
    </div>
</div>