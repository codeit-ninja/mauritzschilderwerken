import { client } from "$lib/directus";
import { readSingleton } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const page = await client.request(
        readSingleton('offerte', {
            // @ts-ignore
            fields: ['*.*', { form: ['*', { fields: ['*.*'] }] }]
        })
    )

    return {
        page
    }
}