import { client } from "$lib/directus";
import { readSingleton } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const page = await client.request(
        readSingleton('offerte', {
            fields: ['form', { form: ['*', { fields: ['*.*'] }] }]
        })
    )

    return {
        page
    }
}