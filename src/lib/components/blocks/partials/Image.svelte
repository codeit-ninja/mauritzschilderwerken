<script lang="ts">
    import type { DirectusFiles } from "$directus";
    import { page } from "$app/stores";

    export let image: DirectusFiles;
    export let type: 'normal' | 'background' = 'normal';
    export let thumbnail = false;

    let query = '?';

    if( thumbnail ) {
        query += 'width=500&height=500'
    }
</script>

{#if type === 'normal'}
    <img src={`${$page.data.site.assetsUrl}/${image.id}${query}`} alt={image.title} class="img-fluid rounded-4" />
{/if}
{#if type === 'background'}
    <div class="image--background">
        <img src={`${$page.data.site.assetsUrl}/${image.id}${query}`} alt={image.title} class="img-fluid rounded-4" />
    </div>
{/if}