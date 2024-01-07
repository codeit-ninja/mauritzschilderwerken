import { client } from "$lib/directus";
import { readSingleton } from "@directus/sdk";

client.request( 
    readSingleton('home')
)