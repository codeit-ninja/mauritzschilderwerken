<script lang="ts">
    import type { LayoutData } from './$types';
    
    import '../scss/bootstrap.scss';
    import '../scss/app.scss';
    
    import Navbar from '$lib/components/Navbar.svelte';
    import { onMount } from 'svelte';

    export let data: LayoutData;

    onMount( async () => {
        await import('bootstrap')
    })
</script>

<div class="site--header">
    <Navbar items={data.menu} />
</div>

<div class="site--content">
    <slot />
</div>