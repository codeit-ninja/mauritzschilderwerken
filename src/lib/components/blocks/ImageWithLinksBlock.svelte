<script lang="ts">
    import type { block_image_with_links, directus_files } from '$directus';
    import Image from './partials/Image.svelte';

    type Block = Omit<block_image_with_links, 'links' | 'image'> & {
        image: directus_files;
        links: {
            title: string;
            url: string;
            description?: string;
        }[]
    }

    export let block: Block;

    const id = Math.random().toString(36).replace('0.', '_');
</script>

<div class="block block--image--with--links">
    <div class="container">
        <div class="row gx-5 align-items-center">
            <div class="col-md-6">
                <div class="block--image--with--links--image">
                    <Image image={block.image} type="background" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="block--image--with--links--image--links">
                    <h6 class="mb-3 block--image--with--links--title">
                        — { block.title }
                    </h6>

                    <div class="accordion" id="accordion-{id}">
                        {#each block.links as link, i}
                            <div class="accordion-item">
                                <h4 class="accordion-header">
                                    <button 
                                        class="accordion-button fs-5 fw-medium" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#item-{id}-{i}" 
                                        aria-expanded="true" 
                                        aria-controls="collapseOne"
                                    >
                                        { link.title }
                                    </button>
                                </h4>
                                <div 
                                    id="item-{id}-{i}" 
                                    class="accordion-collapse collapse"
                                    class:show={i === 0}
                                    data-bs-parent="#accordion-{id}"
                                >
                                    <div class="accordion-body">
                                        <p>{ link.description }</p>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <!-- <ul class="list list-links">
                        {#each block.links as link}
                            <li>
                                <span class="d-block fs-5 fw-medium">{ link.title }</span>
                                {#if link.description}
                                    <p>{ link.description }</p>
                                {/if}
                            </li>
                        {/each}
                    </ul> -->
                </div>
            </div>
        </div>
    </div>
</div>