<script lang="ts">
    import { client } from "$lib/directus";
    import { readItems } from "@directus/sdk/rest";
    import { createEventDispatcher, onMount } from 'svelte';

    const dispatch = createEventDispatcher();

    const loadCategories = () => client.request( readItems('project_categories', { fields: ['name', 'slug'] }) );
    const setCategory = ( categorie: string ) => dispatch('filter', { categorie });

    onMount( () => {
        setCategory( '' );
    } )
</script>

{#await loadCategories()}
    <button class="btn btn-outline-light disabled placeholder col-2"></button>
{:then categories}
    <slot name="title">
        <h6>— Categorieën</h6>
    </slot>
    <div class="d-flex flex-wrap gap-2">
        <input type="radio" class="btn-check" name="categories" id="all" on:change={() => setCategory( '' )} value="" checked />
        <label class="btn btn-outline-dark" for="all">Alle projecten</label>
        {#each categories as categorie}
            <input type="radio" class="btn-check" name="categories" id={ categorie.slug } on:change={() => setCategory( categorie.slug )} value={ categorie.slug } />
            <label class="btn btn-outline-dark" for={ categorie.slug }>{ categorie.name }</label>
        {/each}
    </div>
{/await}