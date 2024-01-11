<script lang="ts">
    import type { LayoutData } from './$types';
    
    import Navbar from '$lib/components/Navbar.svelte';
    import Logo from '$lib/components/blocks/partials/Logo.svelte';

    export let data: LayoutData;

    const leftSideNavItems = data.menu.filter(item => item.position === 'left');
    const rightSideNavItems = data.menu.filter(item => item.position === 'right');
    console.log(leftSideNavItems)
</script>

<div class="site--header">
    <div class="container">
        <div class="site--navbar">
            <div class="d-flex align-items-center">
                <div class="site--navbar--left">
                    <ul class="nav align-items-center gap-4">
                        {#each leftSideNavItems as navItem}
                            <li class="nav-item">
                                <a href="" class="nav-link">{ navItem.collection.name }</a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <Logo />
                </div>
                <div class="site--navbar--right">
                    <ul class="nav justify-content-end align-items-center gap-4">
                        {#each rightSideNavItems as navItem}
                            <li class="nav-item">
                                <a href="" class="nav-link">{ navItem.collection.name }</a>
                            </li>
                        {/each}

                        <li class="nav-item">
                            <a role="button" href="/offerte" class="btn btn-sm btn-outline-light">Offerte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="site--content">
    <slot />
</div>