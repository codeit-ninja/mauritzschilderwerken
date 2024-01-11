<script lang="ts">
    import Image from "./Image.svelte";

    import { page } from '$app/stores';
</script>

<Image image={$page.data.site.logo} rounded={false} />