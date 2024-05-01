<script lang="ts">
    import type { buttons, pages } from "$directus";
    import { page } from '$app/stores'; 
    import Button from "./blocks/partials/Button.svelte";

    type NavItem = {
        collection?: pages;
        position: 'left' | 'right';
        isButton: boolean;
        button: buttons | undefined;
    }

    export let items: NavItem[];
    export let direction: 'row' | 'column' = 'row';
    export let justify: 'center' | 'start' | 'end' = 'start';
    export let align: 'center' | 'start' | 'end' = 'start';
    export let gap: '1' | '2' | '3' | '4' | '5' = '3';
</script>

<div class="nav gap-{ gap } flex-{ direction } align-items-{ align } justify-content-{ justify }">
    {#each items as item}
        {#if item.isButton}
            <Button button={ item.button } />
        {:else}
            {#if item.collection}
                <li class="nav-item">
                    <a 
                        href={`/${item.collection.slug}`} 
                        class="nav-link" 
                        class:active={ $page.params.slug === item.collection.slug }
                    >
                        { item.collection.name }
                    </a>
                </li>
            {/if}
        {/if}
    {/each}
</div>