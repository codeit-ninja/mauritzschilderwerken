<script lang="ts">
    import type { LayoutData } from './$types';
    
    import Navbar from '$lib/components/Navbar.svelte';

    export let data: LayoutData;
</script>

<div class="site--header">
    <Navbar items={data.menu} />
</div>

<div class="site--content">
    <slot />
</div>