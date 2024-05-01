<script lang="ts">
    import type { LayoutData } from './$types';
    
    import Logo from '$lib/components/blocks/partials/Logo.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import NavMenuMobile from '$lib/components/NavMenuMobile.svelte';

    export let data: LayoutData;

    const leftSideNavItems = data.menu.filter(item => item.position === 'left');
    const rightSideNavItems = data.menu.filter(item => item.position === 'right');

    let mobileMenuOpen = false;
</script>

<div class="site--header site--header--{ data.page.headerVariant }">
    <div class="container">
        <div class="site--navbar">
            <div class="d-flex align-items-center gap-4">
                <div class="site--navbar--left d-none d-xl-block">
                    <Nav items={leftSideNavItems} gap="4" />
                </div>
                <div class="flex-grow-1 flex-xl-grow-0 text-center">
                    <Logo />
                </div>
                <div class="site--navbar--right d-none d-xl-block">
                    <Nav items={rightSideNavItems} align="center" justify="end" gap="4" />
                </div>
                <button class="navbar--mobile--toggle d-flex d-xl-none" on:click={() => mobileMenuOpen = ! mobileMenuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</div>

<div class="site--content">
    <slot />
</div>

<NavMenuMobile bind:show={mobileMenuOpen} />