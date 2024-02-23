<script lang="ts">
    import type { block_image_text, buttons, directus_files } from "$directus";
    import ImageWithTextPrimary from "./partials/ImageWithTextPrimary.svelte";
    import ImageWithTextSecondary from "./partials/ImageWithTextSecondary.svelte";

    type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };
    type Block = NoUndefinedField<Omit<block_image_text, 'button' | 'image'> & {
        image: directus_files;
        button: buttons;
    }>

    export let block: Block;
</script>

<div class="block block--image--with--text block--image--with--text--{ block.variant }">
    <div class="container">
        {#if block.variant === 'primary'}
            <ImageWithTextPrimary 
                title={block.title} 
                content={block.text} 
                useButton={block.useButton} 
                button={block.button}
                image={block.image}
                imagePosition={block.imagePosition}
            />
        {/if}
        {#if block.variant === 'secondary'}
            <ImageWithTextSecondary
                title={block.title} 
                content={block.text} 
                useButton={block.useButton} 
                button={block.button}
                image={block.image}
                imagePosition={block.imagePosition}
            />
        {/if}
    </div>
</div>