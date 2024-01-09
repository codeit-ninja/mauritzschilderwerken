<script lang="ts">
    /**
     * Home page template
     */
    import { page } from '$app/stores';
    import Blocks from '$lib/components/Blocks.svelte';
</script>

<Blocks blocks={$page.data.page.blocks} />