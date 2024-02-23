<script lang="ts">
    import type { block_gallery, buttons, directus_files } from '$directus';
    import Button from "./partials/Button.svelte";
    import Image from './partials/Image.svelte';
    import Markdown from 'svelte-markdown'

    type Block = Omit<block_gallery, 'button' | 'galleryItems' | 'instagramButton'> & {
        ctaButton: buttons;
        instagramButton: buttons;
        galleryItems: {
            block_gallery_id: block_gallery;
            directus_files_id: directus_files;
            id: number;
        }[]
    }

    export let block: Block;
</script>

<div class="block block--gallery">
    <div class="container">
        <div class="block--gallery--grid">
            {#each block.galleryItems as item}
                <Image image={item.directus_files_id} thumbnail />
            {/each}
            {#if block.displayCta}
                <div class="d-flex flex-column block--gallery--cta rounded-4 bg-black text-white">
                    <div class="mt-auto position-relative w-100 text-center">
                        {#if block.showInstagramButton}
                            <Button button={block.instagramButton} classes="block--gallery--btn--instagram" />
                        {/if}
                        
                        <Markdown source={block.ctaText} />
                    </div>
                    <Button button={block.ctaButton} classes="mt-auto" />
                </div>
            {/if}
        </div>
    </div>
</div>