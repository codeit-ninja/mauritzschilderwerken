import { PUBLIC_DIRECTUS_URL, PUBLIC_DIRECTUS_TOKEN } from "$env/static/public";
import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { MySchema } from "$directus";

export const client = createDirectus<MySchema>(PUBLIC_DIRECTUS_URL)
    .with(staticToken(PUBLIC_DIRECTUS_TOKEN))
    .with(rest())