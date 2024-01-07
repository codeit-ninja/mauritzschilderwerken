import { readItem, readSingleton } from "@directus/sdk"
import { client } from "./directus"

export const getMetaValue = async ( key: string ) => {
    try {
        const request = await client.request( readItem( 'meta', key ) )

        return request.value
    } catch(_) {
        return null;
    }
}

export const loadSite = async () => {
    return await client.request( readSingleton('site') )
}