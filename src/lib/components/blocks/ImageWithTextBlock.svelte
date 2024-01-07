<script lang="ts">
    import type { BlockImageText, Buttons, DirectusFiles } from "$directus";
    import ImageWithTextPrimary from "./partials/ImageWithTextPrimary.svelte";

    type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };
    type Block = NoUndefinedField<Omit<BlockImageText, 'button' | 'image'> & {
        image: DirectusFiles;
        button: Buttons;
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
            />
        {/if}
    </div>
</div>