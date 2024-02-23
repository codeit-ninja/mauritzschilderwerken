<script lang="ts">
    import type { LayoutData } from './$types';
    
    import Navbar from '$lib/components/Navbar.svelte';
    import Logo from '$lib/components/blocks/partials/Logo.svelte';
    import Nav from '$lib/components/Nav.svelte';

    export let data: LayoutData;

    const leftSideNavItems = data.menu.filter(item => item.position === 'left');
    const rightSideNavItems = data.menu.filter(item => item.position === 'right');
</script>

<div class="site--header">
    <div class="container">
        <div class="site--navbar">
            <div class="d-flex align-items-center">
                <div class="site--navbar--left d-none d-xl-block">
                    <Nav items={leftSideNavItems} gap="4" />
                </div>
                <div class="flex-grow-1 flex-xl-grow-0 text-center">
                    <Logo />
                </div>
                <div class="site--navbar--right d-none d-xl-block">
                    <Nav items={rightSideNavItems} align="end" gap="4" />
                </div>
            </div>
        </div>
    </div>
</div>

<div class="site--content">
    <slot />
</div>