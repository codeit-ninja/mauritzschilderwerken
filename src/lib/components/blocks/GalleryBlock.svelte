<script lang="ts">
    import type { BlockGallery, BlockHero, Buttons, DirectusFiles } from '$directus';
    import { page } from "$app/stores";
    import Button from "./partials/Button.svelte";
    import Image from './partials/Image.svelte';
    import RawAsset from './partials/RawAsset.svelte';
    import Markdown from 'svelte-markdown'

    type Block = Omit<BlockGallery, 'button' | 'galleryItems' | 'instagramButton'> & {
        ctaButton: Buttons;
        instagramButton: Buttons;
        galleryItems: {
            block_gallery_id: BlockGallery;
            directus_files_id: DirectusFiles;
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