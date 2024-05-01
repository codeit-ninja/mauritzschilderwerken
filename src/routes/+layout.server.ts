import { client } from '$lib/directus';
import { readItem, readSingleton } from '@directus/sdk';
import type { pages, menu, buttons } from '$directus';
import { getPageBySlug } from '$lib/server/helpers';

type MenuPagesCollection = { key: number; collection: MenuPagesCollection; }
type MenuButtonCollection = { key: number; collection: 'buttons'; }
type MenuItem = {
    collection: MenuPagesCollection;
    submenu: MenuPagesCollection[];
    position: 'left' | 'right';
    isButton: boolean;
    button: MenuButtonCollection;
}
type Menu = {
    items: MenuItem[]
}

export const load = async ( { params } ) => {    
    const menu = await client.request(
        readSingleton('menu')
    ) as unknown as Menu;
    
    const site = await client.request(
        readSingleton('site', {
            // @ts-expect-error
            fields: ['*', { home_page: ['*', { seo: ['*'], blocks: ['*.*.*.*.*'] }] }, { logo: ['*'], logoDark: ['*'] }]
        })
    )
    
    const fetchMenuItems = async ( key: string | number ) => {
        return await client.request(
            readItem('pages', key)
        )
    }

    const fetchButton = async ( key: string | number ) => {
        return await client.request(
            readItem('buttons', key)
        )
    }
    
    let page: pages;
    
    const menuPromises = menu.items.map(async item => {
        let button: buttons | undefined = undefined
        let collection: pages | undefined = undefined;

        if( item.isButton && item.button ) {
            button = await fetchButton( item.button.key )
        }

        if( ! button ) {
            collection = await fetchMenuItems( item.collection.key )
        }

        return {
            collection,
            position: item.position,
            isButton: item.isButton,
            button
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
        page = site.home_page as pages;
    }

    return {
        menu: menuData,
        site,
        page
    }
}