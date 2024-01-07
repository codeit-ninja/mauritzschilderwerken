import type { LayoutServerLoad } from './$types';
import { client } from '$lib/directus';
import { readItems, readSingleton } from '@directus/sdk';
import type { Pages } from '$directus';
import { getPageBySlug } from '$lib/server/helpers';

export const load: LayoutServerLoad = async ( { request, params } ) => {
    const menu = await client.request(
        readItems('pages', {
            fields: ['name', 'slug', 'parent_id', 'children', 'order', 'hide_in_nav'],
            sort: 'order'
        })
    )
    
    const site = await client.request(
        readSingleton('site', {
            fields: ['*', { home_page: ['*', { blocks: ['*.*.*.*'] }] }]
        })
    )
    
    let page: Pages;

    /**
     * Load page by slug
     * If no slug is found then load the home page
     */
    if( params.slug ) {
        page = await getPageBySlug( params.slug )
    } else {
        page = site.home_page as Pages;
    }
    
    return {
        menu,
        site,
        page
    }
}