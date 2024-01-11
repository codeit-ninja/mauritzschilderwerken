<script lang="ts">
    import type { LayoutData } from './$types';
    
    import Navbar from '$lib/components/Navbar.svelte';
    import Logo from '$lib/components/blocks/partials/Logo.svelte';

    export let data: LayoutData;
</script>

<div class="site--header text-white">
    <div class="container">
        <div class="site--navbar">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <a href="/">Terug naar website</a>
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <button class="btn btn-outline-light btn-sm">Offerte</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="site--content">
    <slot />
</div>