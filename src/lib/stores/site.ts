import { writable } from "svelte/store";
import type { Site } from "$directus";

export const site = writable<Site>()