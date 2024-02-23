<script lang="ts">
    import Image from "./Image.svelte";

    import { page } from '$app/stores';
</script>

<a href="/">
    <Image image={$page.data.site.logo} rounded={false} />
</a>