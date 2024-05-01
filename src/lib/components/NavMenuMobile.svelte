<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from '$app/stores';
    import Nav from "./Nav.svelte";

    export let show = false;

    $: {
        if( browser ) {
            const elements = document.querySelectorAll('.site--content, .site--header, .site--footer');

            if( show ) {
                if( elements.length > 0 ) {
                    [...elements].forEach( el => (el as HTMLDivElement).style.transform = 'translateX(-500px)' )
                }
            } else {
                if( elements.length > 0 ) {
                    [...elements].forEach( el => (el as HTMLDivElement).style.transform = 'none' )
                }
            }
        }
    }
</script>
<div class="navbar--mobile" class:navbar--mobile--open={show} class:navbar--mobile--closed={!show}>
    <button class="d-flex gap-3 align-items-center text-white site--link" on:click={ () => show = ! show }>
        <span class="material-symbols-outlined">close</span>
        sluiten
    </button>
    <Nav items={ $page.data.menu } direction="column" gap="5" />
</div>
