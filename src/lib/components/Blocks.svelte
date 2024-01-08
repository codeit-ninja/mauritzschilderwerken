<script lang="ts">
    import type { PagesBlocks } from "$directus";
    import GalleryBlock from "./blocks/GalleryBlock.svelte";
    import HeroBlock from "./blocks/HeroBlock.svelte";
    import ImageWithLinksBlock from "./blocks/ImageWithLinksBlock.svelte";
    import CtaCardBlock from "./blocks/CtaCardBlock.svelte";
    import ImageWithTextBlock from "./blocks/ImageWithTextBlock.svelte";
    import JumbotronBlock from "./blocks/JumbotronBlock.svelte";
    import JumbotronWithBlocksBlock from "./blocks/JumbotronWithBlocksBlock.svelte";
    import NumbersBlock from "./blocks/NumbersBlock.svelte";

    export let blocks: PagesBlocks[]
</script>
{#each blocks as block}
    {#if block.collection === 'block_hero'}
        <HeroBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_image_with_links'}
        <ImageWithLinksBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_image_text'}
        <ImageWithTextBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_jumbotron'}
        <JumbotronBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_jumbotron_with_blocks'}
        <JumbotronWithBlocksBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_gallery'}
        <GalleryBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_numbers'}
        <NumbersBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_cta_card'}
        <CtaCardBlock block={block.item} />
    {/if}
{/each}

<!-- <div class="grid">
    <div class="test">
        3
    </div>
    <div>
        1
    </div>
    <div>
        2
    </div>
    <div>
        4
    </div>
    <div>
        5
    </div>
    <div>
        6
    </div>
    <div>
        7
    </div>
    <div>
        8
    </div>
    <div>
        9
    </div>
</div> -->