import { PUBLIC_DIRECTUS_URL, PUBLIC_DIRECTUS_TOKEN } from "$env/static/public";
import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { CustomDirectusTypes } from "$directus";
import type { MyCollections } from "../types/my-collections";

export const client = createDirectus<MyCollections>(PUBLIC_DIRECTUS_URL)
    .with(staticToken(PUBLIC_DIRECTUS_TOKEN))
    .with(rest())
