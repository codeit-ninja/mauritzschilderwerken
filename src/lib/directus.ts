import { env } from "$env/dynamic/public";
import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { MySchema } from "$directus";

export const client = createDirectus<MySchema>(env.PUBLIC_DIRECTUS_URL)
    .with(staticToken(env.PUBLIC_DIRECTUS_TOKEN))
    .with(rest())