import { client } from "$lib/directus"
import { readItems } from "@directus/sdk"
import type { pages } from "$directus"

export const getPageBySlug = async ( slug: string ): Promise<pages> => {
    const request = await client.request(
        readItems('pages', {
            // @ts-expect-error
            fields: ['*', { blocks: ['*.*.*.*'], seo: ['*'] }],
            filter: {
                slug: {
                    _eq: slug
                }
            },
            limit: 1
        })
    )

    return request.at(0) as pages
}