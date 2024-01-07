<script lang="ts">
    /**
     * Image with text primary variant
    */
    import type { Buttons, DirectusFiles } from "$directus";
    import Button from "./Button.svelte";
    import Image from "./Image.svelte";

    export let title: string;
    export let content: string;
    export let image: DirectusFiles;
    export let useButton: boolean;
    export let button: Buttons;
</script>

<div class="row g-5">
    <div class="col-md-7">
        <div class="block--image--with--text--content">
            <h2>{ title }</h2>
            <p>{ content }</p>

            {#if useButton}
                <Button {button} />
            {/if}
        </div>
    </div>
    <div class="col-md-5">
        <Image {image} type="background" />
    </div>
</div>