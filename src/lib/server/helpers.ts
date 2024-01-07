import { client } from "$lib/directus"
import { readItems } from "@directus/sdk"
import type { Pages } from "$directus"

export const getPageBySlug = async ( slug: string ): Promise<Pages> => {
    const request = await client.request(
        readItems('pages', {
            fields: ['*', { blocks: ['*.*'] }],
            filter: {
                slug: {
                    _eq: slug
                }
            },
            limit: 1
        })
    )

    return request.at(0) as Pages
}