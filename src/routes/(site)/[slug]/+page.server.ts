import { client } from '$lib/directus';
import { readItems } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const blocks = await client.request(
        readItems('pages_blocks', {
            filter: {
                pages_id: {
                    slug: {
                        _eq: params.slug
                    }
                }
            },
            sort: ['order'],
            fields: ['collection', 'item', { item: ['*', 
                { 
                    ctaButton: ['*.*.*.*'], 
                    instagramButton: ['*.*.*.*'], 
                    bottomRightImage: ['*.*.*.*'],
                    button: ['*.*.*.*'],
                    image: ['*.*.*.*'],
                    projects: ['*', { featuredImage: ['*'], categories: ['*', { project_categories_id: ['*'] }], images: ['*.*'] }],
                    topBlockButton: ['*.*.*.*'],
                    video: ['*.*.*.*']
                }
            ] } ]
        })
    )

	return {
        blocks
    }
}