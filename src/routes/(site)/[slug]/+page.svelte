<script lang="ts">
    /**
     * Offerte page template
     */
    import type { PageData } from './$types';
    import Blocks from '$lib/components/Blocks.svelte';

    export let data: PageData;
</script>

<Blocks blocks={data.blocks} />