<script lang="ts">
    import type { directus_files } from "$directus";
    import { randomID } from "$lib/utils";
    import Image from "./Image.svelte";
    
    export let images: directus_files[];

    const id = randomID();
</script>

<div { id } class="carousel slide">
    <div class="carousel-inner">
        {#each images as image, i}
            <div class="carousel-item" class:active={ i === 0 }>
                <Image image={ image } />
            </div>
        {/each}
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#{ id }"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#{ id }"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
