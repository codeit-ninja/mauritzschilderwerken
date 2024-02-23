<script lang="ts">
    /**
     * Image with text primary variant
    */
    import type { buttons, directus_files } from "$directus";
    import Markdown from 'svelte-markdown';
    import Button from "./Button.svelte";
    import Image from "./Image.svelte";

    export let title: string;
    export let content: string;
    export let image: directus_files;
    export let useButton: boolean;
    export let button: buttons;
    export let imagePosition = 'right';
</script>

<div class="row g-5">
    <div 
        class="col-md-7"
        class:order-0={imagePosition === 'right'}
        class:order-1={imagePosition === 'left'}
    >
        <div class="block--image--with--text--content">
            <h6 class="mb-5">— { title }</h6>
            <Markdown source={content} />

            {#if useButton}
                <Button {button} />
            {/if}
        </div>
    </div>
    <div 
        class="col-md-5"
        class:order-1={imagePosition === 'right'}
        class:order-0={imagePosition === 'left'}
    >
        <Image {image} type="background" />
    </div>
</div>