<script lang="ts">
    import type { buttons, menu, pages } from "$directus";
    import Button from "./blocks/partials/Button.svelte";

    type NavItem = {
        collection: pages;
        position: 'left' | 'right';
        isButton: boolean;
        button: buttons | undefined;
    }

    export let items: NavItem[];
    export let direction: 'row' | 'column' = 'row';
    export let align: 'center' | 'start' | 'end' = 'start';
    export let gap: '1' | '2' | '3' | '4' | '5' = '3';

    console.log(items);
</script>

<div class="nav gap-{ gap } flex-{ direction } align-items-center justify-content-{ align }">
    {#each items as item}
        {#if item.isButton}
            <Button button={ item.button } />
        {:else}
            <li class="nav-item">
                <a href={`/${item.collection.slug}`} class="nav-link">{ item.collection.name }</a>
            </li>
        {/if}
    {/each}
</div>