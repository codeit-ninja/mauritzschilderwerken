<script lang="ts">
    import { page } from '$app/stores';
    import type { block_hero } from '$directus';
    import Button from "./partials/Button.svelte";

    export let block: block_hero;
</script>
<div 
    class="block block--hero"
    class:overlay={block.showOverlay}
    class:shape={block.showBackgroundShape}
    class:block--hero--stretch={block.stretch}
>
    <div class="block--hero--wrapper">
        {#if block.background_type === 'video' && block.video}
            <video src={`${$page.data.site.directus_url}/assets/${block.video.id}`} muted autoplay></video>
        {/if}
        {#if block.background_type === 'image' && block.image}
            <span class="block--hero--image"><img src={`${$page.data.site.directus_url}/assets/${block.image.id}`} alt="Mauritzschilderwerken.nl" /></span>
        {/if}
        <div class="container h-100">
            <div class="h-100 d-flex flex-column justify-content-end align-items-start gap-5 block--hero--content">
                <h1 class="block--hero--leading text-white">{@html block.headline?.replaceAll('\n', '<br>') }</h1>

                {#if block.show_button && block.button}
                    <Button button={block.button} />
                {/if}
            </div>
        </div>
    </div>
</div>