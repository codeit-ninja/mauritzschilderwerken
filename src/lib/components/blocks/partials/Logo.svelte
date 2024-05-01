<script lang="ts">
    import Image from "./Image.svelte";

    import { page } from '$app/stores';
</script>

<a href="/">
    {#if $page.data.page.headerVariant === 'dark'}
        <Image image={$page.data.site.logoDark} rounded={false} />
    {:else}
        <Image image={$page.data.site.logo} rounded={false} />
    {/if}
</a>