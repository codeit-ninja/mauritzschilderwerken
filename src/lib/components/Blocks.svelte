<script lang="ts">
    import type { pages_blocks } from "$directus";
    import GalleryBlock from "./blocks/GalleryBlock.svelte";
    import HeroBlock from "./blocks/HeroBlock.svelte";
    import ImageWithLinksBlock from "./blocks/ImageWithLinksBlock.svelte";
    import CtaCardBlock from "./blocks/CtaCardBlock.svelte";
    import ImageWithTextBlock from "./blocks/ImageWithTextBlock.svelte";
    import JumbotronBlock from "./blocks/JumbotronBlock.svelte";
    import JumbotronWithBlocksBlock from "./blocks/JumbotronWithBlocksBlock.svelte";
    import NumbersBlock from "./blocks/NumbersBlock.svelte";
    import ProjectsGalleryBlock from "./blocks/ProjectsGalleryBlock.svelte";
    import TextWithListBlock from "./blocks/TextWithListBlock.svelte";
    import HeaderOffsetBlock from "./blocks/HeaderOffsetBlock.svelte";

    export let blocks: Pick<pages_blocks, 'collection' | 'item'>[]
</script>
{#each blocks as block}
    {#if block.collection === 'block_header_offset'}
        <HeaderOffsetBlock block={block.item} />
    {/if}
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
    {#if block.collection === 'block_gallery_projects'}
        <ProjectsGalleryBlock block={block.item} />
    {/if}
    {#if block.collection === 'block_text_with_list'}
        <TextWithListBlock block={block.item} />
    {/if}
{/each}