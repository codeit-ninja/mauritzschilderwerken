<script lang="ts">
    import type { Pages } from "$directus";
    import { page } from '$app/stores';

    type NavItem = Pick<Pages, 'name'  | 'slug' | 'parent_id' | 'children' | 'order' | 'hide_in_nav'>

    export let items: NavItem[];

    const left = items.filter(item => item.order! < 0);
    const right = items.filter(item => item.order! > 0);
</script>

<div class="container">
    <div class="site--navbar">
        <div class="row align-items-center">
            <div class="col-4">
                <nav class="nav gap-5">
                    {#each left as item, i}
                        {#if item.hide_in_nav !== true}
                            <a class="nav-link" class:active={i === 1} href="/{ item.slug }">{ item.name }</a>
                        {/if}
                    {/each}
                </nav>
            </div>
            <div class="col-4 text-center">
                <img src={`${$page.data.site.directus_url}/assets/${$page.data.site.logo}`} alt="Mauritzschilderwerken.nl" />
            </div>
            <div class="col-4">
                <div class="d-flex align-items-center justify-content-end gap-5">
                    <nav class="nav">
                        {#each right as item}
                            {#if item.hide_in_nav !== true}
                                <a class="nav-link" href="/{ item.slug }">{ item.name }</a>
                            {/if}
                        {/each}
                    </nav>
                    <a role="button" class="btn btn-outline-white" href="/offerte">Offerte</a>
                </div>
            </div>
        </div>
    </div>
</div>