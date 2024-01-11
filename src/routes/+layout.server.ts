import type { LayoutServerLoad } from './$types';
import { client } from '$lib/directus';
import { readItem, readItems, readSingleton } from '@directus/sdk';
import type { Pages } from '$directus';
import { getPageBySlug } from '$lib/server/helpers';

type MenuPagesCollection = { key: number; collection: MenuPagesCollection; }
type MenuItem = {
    collection: MenuPagesCollection;
    submenu: MenuPagesCollection[];
    position: 'left' | 'right';
}
type Menu = {
    items: MenuItem[]
}

export const load: LayoutServerLoad = async ( { request, params } ) => {
    const menu = await client.request(
        readSingleton('menu')
    ) as Menu;
    
    const site = await client.request(
        readSingleton('site', {
            fields: ['*', { home_page: ['*', { blocks: ['*.*.*.*'] }] }, { logo: ['*'] }]
        })
    )
    
    const fetchMenuItems = async ( key: string | number ) => {
        return await client.request(
            readItem('pages', key)
        )
    }
    
    let page: Pages;
    
    const menuPromises = menu.items.map(async item => {
        const collection = await fetchMenuItems( item.collection.key )
        const submenuPromises = item.submenu?.map( async item => await fetchMenuItems( item.collection.key ))

        return {
            submenu: submenuPromises ? await Promise.all( submenuPromises ) : [],
            collection,
            position: item.position,
        }
    })

    const menuData = await Promise.all( menuPromises )

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
        menu: menuData,
        site,
        page
    }
}