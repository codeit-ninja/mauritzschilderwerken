<script lang="ts">
    import { client } from "$lib/directus";
    import { readAssetRaw, type AssetsQuery, readFile } from "@directus/sdk";

    export let id: string;
    export let query: AssetsQuery | undefined = undefined;

    ( async () => {
        const request = await client.request(
            readFile( id )
        )
    })()
</script>