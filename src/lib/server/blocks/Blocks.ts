import { client } from "$lib/directus";
import { readItem, readItems } from "@directus/sdk";
import { loadBlockGalleryProjects } from './BlockGalleryProjects';
import type { LayoutParams } from "../../../routes/$types";
import type { MySchema, pages_blocks } from '$directus';

type RemoveSingleTons<T> = {
    [K in keyof T as T[K] extends unknown[] ? K : never]: T[K]
}

export type Collections = RemoveSingleTons<MySchema>;

export const loadBlock = async <T extends NonNullable<pages_blocks["collection"]>>( name: T, id: number ) => {
    return await client.request( readItem( name, id ) ) as MySchema[T][0];
}

export const loadCollection = async <T extends keyof Collections>( collection: T, id: number ) => {
    return await client.request( readItem( collection, id ) ) as Collections[T][0]
}

export const loadBlocks = async ( params: LayoutParams ) => {
    const pageBlocks = await client.request(
        readItems('pages_blocks', {
            filter: {
                pages_id: {
                    slug: {
                        _eq: params.slug
                    }
                }
            },
        })
    )

    const blocks = await Promise.all( pageBlocks.map(async pageBlock => {
        if( ! pageBlock.collection || ! pageBlock.item ) {
            return;
        }

        if( pageBlock.collection === 'block_gallery_projects' ) {
            loadBlockGalleryProjects( parseInt( pageBlock.item as string ) )
        }

        return await client.request( readItem( pageBlock.collection, pageBlock.item as string ) )
    }))

    return blocks;
}