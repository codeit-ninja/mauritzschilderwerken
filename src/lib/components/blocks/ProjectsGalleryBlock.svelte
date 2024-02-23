<script lang="ts">
    import type { block_gallery_projects, buttons, projects } from "$directus";
    import Markdown from 'svelte-markdown';
    import Button from "./partials/Button.svelte";
    import Image from './partials/Image.svelte';
    import Categories from "./partials/Categories.svelte";
    import { client } from '$lib/directus';
    import { readItems } from "@directus/sdk";
    import ProjectCarousel from "./partials/ProjectCarousel.svelte";

    type Block = Omit<block_gallery_projects, 'projects' | 'instagramButton'> & {
        projects: projects[];
        instagramButton: buttons;
    }

    export let block: Block;

    const carousels: { show: boolean }[] = Array.from( new Array(1000) ).map(() => ({ show: false }))

    const filter = async ( category: string ) => {
        let filter = {};

        if( category && category !== '' ) {
            filter = {
                categories: {
                    project_categories_id: {
                        slug: {
                            _eq: category
                        }
                    }
                }
            }
        }

        block.projects = await client.request(
            readItems('projects', {
                filter,
                // @ts-ignore
                fields: ['*.*.*.*']
            })
        ) as projects[];
    }
</script>

<div class="block block--projects--gallery">
    <div class="container">
        {#if block.showFilters}
            <div class="block--filters mb-5">
                <Categories on:filter={( event ) => filter( event.detail.categorie )}>
                    <h6 class="mb-4" slot="title">— Filter projecten</h6>
                </Categories>
            </div>
        {/if}
        <div class="block--gallery--grid pt-4">
            {#each block.projects as project, i}
                <a href={'javascript:void(0)'} role="button" on:click={ () => carousels[i].show = true }>
                    <Image image={project.featuredImage} thumbnail />
                    <span>{ project.title }</span>
                </a>
                <div class="block--projects--gallery--carousel" class:d-none={ ! carousels[i].show } class:d-flex={ carousels[i].show }>
                    <a href={'javascript:void(0)'} class="d-flex gap-3 align-items-center text-white site--link" on:click={ () => carousels[i].show = false }>
                        Sluiten
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </a>
                    <ProjectCarousel images={ project.images.map( image => image.directus_files_id ) } />
                </div>
            {/each}
            {#if block.showInstagramButton}
                <div class="d-flex flex-column block--gallery--cta rounded-4 bg-black text-white">
                    <div class="position-relative w-100 text-center">
                        {#if block.showInstagramButton}
                            <Button button={block.instagramButton} classes="block--gallery--btn--instagram" />
                        {/if}
                        {#if block.instagramButtonContent}
                            <Markdown source={block.instagramButtonContent} />
                        {/if}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>