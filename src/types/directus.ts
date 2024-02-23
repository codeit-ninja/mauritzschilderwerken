import { DirectusFiles, DirectusRevisions, DirectusUsers, DirectusCollections, DirectusPanels, DirectusFields, DirectusFolders, DirectusOperations, DirectusFlows, DirectusDashboards, DirectusRoles, DirectusActivity, DirectusVersions, DirectusShares } from '@directus/sdk';

export interface MySchema {
    block_cta_card: block_cta_card[];
    block_gallery: block_gallery[];
    block_gallery_files: block_gallery_files[];
    block_gallery_projects: block_gallery_projects[];
    block_hero: block_hero[];
    block_image_text: block_image_text[];
    block_image_with_links: block_image_with_links[];
    block_jumbotron: block_jumbotron[];
    block_jumbotron_with_blocks: block_jumbotron_with_blocks[];
    block_numbers: block_numbers[];
    buttons: buttons[];
    directus_activity: directus_activity[];
    directus_collections: directus_collections[];
    directus_dashboards: directus_dashboards[];
    directus_extensions: directus_extensions[];
    directus_fields: directus_fields[];
    directus_files: directus_files[];
    directus_flows: directus_flows[];
    directus_folders: directus_folders[];
    directus_migrations: directus_migrations[];
    directus_notifications: directus_notifications[];
    directus_operations: directus_operations[];
    directus_panels: directus_panels[];
    directus_permissions: directus_permissions[];
    directus_presets: directus_presets[];
    directus_relations: directus_relations[];
    directus_revisions: directus_revisions[];
    directus_roles: directus_roles[];
    directus_sessions: directus_sessions[];
    directus_settings: directus_settings;
    directus_shares: directus_shares[];
    directus_translations: directus_translations[];
    directus_users: directus_users[];
    directus_versions: directus_versions[];
    directus_webhooks: directus_webhooks[];
    form_fields: form_fields[];
    form_submissions: form_submissions[];
    forms: forms[];
    forms_fields: forms_fields[];
    menu: menu;
    meta: meta[];
    offerte: offerte;
    pages: pages[];
    pages_blocks: pages_blocks[];
    projects: projects[];
    projects_files: projects_files[];
    site: site;
}

export interface block_cta_card {
    id: number;
    button: buttons | number | null;
    description: string | null;
    image: DirectusFiles<MySchema> | string | null;
    title: string | null;
    useButton: boolean | null;
}

export interface block_gallery {
    id: number;
    ctaButton: buttons | number | null;
    ctaText: string | null;
    displayCta: boolean | null;
    instagramButton: buttons | number | null;
    showInstagramButton: boolean | null;
}

export interface block_gallery_files {
    id: number;
    block_gallery_id: block_gallery | number | null;
    directus_files_id: DirectusFiles<MySchema> | string | null;
}

export interface block_gallery_projects {
    id: number;
    projects: projects[] | number[];
}

export interface block_hero {
    id: number;
    background_type: string;
    button: buttons | number | null;
    headline: string | null;
    image: DirectusFiles<MySchema> | string | null;
    show_button: boolean | null;
    video: DirectusFiles<MySchema> | string | null;
}

export interface block_image_text {
    id: number;
    button: buttons | number | null;
    image: DirectusFiles<MySchema> | string | null;
    text: string | null;
    title: string | null;
    useButton: boolean | null;
    variant: string | null;
}

export interface block_image_with_links {
    id: number;
    image: DirectusFiles<MySchema> | string | null;
    links: unknown | null;
    title: string | null;
}

export interface block_jumbotron {
    id: number;
    applyNegativeMargin: boolean | null;
    text: string;
    title: string | null;
}

export interface block_jumbotron_with_blocks {
    id: number;
    bottomLeftBlockContent: string;
    bottomRightImage: DirectusFiles<MySchema> | string | null;
    topBlockButton: buttons | number | null;
    topBlockText: string | null;
    topBlockTitle: string | null;
}

export interface block_numbers {
    id: number;
    numbers: unknown | null;
}

export interface buttons {
    id: number;
    label: string | null;
    link: string | null;
    outline: boolean | null;
    smallButton: boolean | null;
    variant: string | null;
}

export interface directus_activity {
    id: number;
    action: string;
    collection: string;
    comment: string | null;
    ip: string | null;
    item: string;
    origin: string | null;
    revisions: DirectusRevisions<MySchema>[] | number[];
    timestamp: 'datetime';
    user: DirectusUsers<MySchema> | string | null;
    user_agent: string | null;
}

export interface directus_collections {
    collection: string;
    accountability: string | null;
    archive_app_filter: boolean;
    archive_field: string | null;
    archive_value: string | null;
    collapse: string;
    color: string | null;
    display_template: string | null;
    group: DirectusCollections<MySchema> | string | null;
    hidden: boolean;
    icon: string | null;
    item_duplication_fields: unknown | null;
    note: string | null;
    preview_url: string | null;
    singleton: boolean;
    sort: number | null;
    sort_field: string | null;
    translations: unknown | null;
    unarchive_value: string | null;
    versioning: boolean;
}

export interface directus_dashboards {
    id: string;
    color: string | null;
    date_created: 'datetime' | null;
    icon: string;
    name: string;
    note: string | null;
    panels: DirectusPanels<MySchema>[] | string[];
    user_created: DirectusUsers<MySchema> | string | null;
}

export interface directus_extensions {
    name: string;
    enabled: boolean;
}

export interface directus_fields {
    id: number;
    collection: DirectusCollections<MySchema> | string;
    conditions: unknown | null;
    display: string | null;
    display_options: unknown | null;
    field: string;
    group: DirectusFields<MySchema> | string | null;
    hidden: boolean;
    interface: string | null;
    note: string | null;
    options: unknown | null;
    readonly: boolean;
    required: boolean | null;
    sort: number | null;
    special: 'csv' | null;
    translations: unknown | null;
    validation: unknown | null;
    validation_message: string | null;
    width: string | null;
}

export interface directus_files {
    id: string;
    charset: string | null;
    description: string | null;
    duration: number | null;
    embed: string | null;
    filename_disk: string | null;
    filename_download: string;
    filesize: string | null;
    folder: DirectusFolders<MySchema> | string | null;
    height: number | null;
    location: string | null;
    metadata: unknown | null;
    modified_by: DirectusUsers<MySchema> | string | null;
    modified_on: 'datetime';
    storage: string;
    tags: unknown | null;
    title: string | null;
    type: string | null;
    uploaded_by: DirectusUsers<MySchema> | string | null;
    uploaded_on: 'datetime';
    width: number | null;
}

export interface directus_flows {
    id: string;
    accountability: string | null;
    color: string | null;
    date_created: 'datetime' | null;
    description: string | null;
    icon: string | null;
    name: string;
    operation: DirectusOperations<MySchema> | string | null;
    operations: DirectusOperations<MySchema>[] | string[];
    options: unknown | null;
    status: string;
    trigger: string | null;
    user_created: DirectusUsers<MySchema> | string | null;
}

export interface directus_folders {
    id: string;
    name: string;
    parent: DirectusFolders<MySchema> | string | null;
}

export interface directus_migrations {
    version: string;
    name: string;
    timestamp: 'datetime' | null;
}

export interface directus_notifications {
    id: number;
    collection: string | null;
    item: string | null;
    message: string | null;
    recipient: DirectusUsers<MySchema> | string;
    sender: DirectusUsers<MySchema> | string | null;
    status: string | null;
    subject: string;
    timestamp: 'datetime' | null;
}

export interface directus_operations {
    id: string;
    date_created: 'datetime' | null;
    flow: DirectusFlows<MySchema> | string;
    key: string;
    name: string | null;
    options: unknown | null;
    position_x: number;
    position_y: number;
    reject: DirectusOperations<MySchema> | string | null;
    resolve: DirectusOperations<MySchema> | string | null;
    type: string;
    user_created: DirectusUsers<MySchema> | string | null;
}

export interface directus_panels {
    id: string;
    color: string | null;
    dashboard: DirectusDashboards<MySchema> | string;
    date_created: 'datetime' | null;
    height: number;
    icon: string | null;
    name: string | null;
    note: string | null;
    options: unknown | null;
    position_x: number;
    position_y: number;
    show_header: boolean;
    type: string;
    user_created: DirectusUsers<MySchema> | string | null;
    width: number;
}

export interface directus_permissions {
    id: number;
    action: string;
    collection: string;
    fields: 'csv' | null;
    permissions: unknown | null;
    presets: unknown | null;
    role: DirectusRoles<MySchema> | string | null;
    validation: unknown | null;
}

export interface directus_presets {
    id: number;
    bookmark: string | null;
    collection: string | null;
    color: string | null;
    filter: unknown | null;
    icon: string | null;
    layout: string | null;
    layout_options: unknown | null;
    layout_query: unknown | null;
    refresh_interval: number | null;
    role: DirectusRoles<MySchema> | string | null;
    search: string | null;
    user: DirectusUsers<MySchema> | string | null;
}

export interface directus_relations {
    id: number;
    junction_field: string | null;
    many_collection: string;
    many_field: string;
    one_allowed_collections: 'csv' | null;
    one_collection: string | null;
    one_collection_field: string | null;
    one_deselect_action: string;
    one_field: string | null;
    sort_field: string | null;
}

export interface directus_revisions {
    id: number;
    activity: DirectusActivity<MySchema> | number;
    collection: string;
    data: unknown | null;
    delta: unknown | null;
    item: string;
    parent: DirectusRevisions<MySchema> | number | null;
    version: DirectusVersions<MySchema> | string | null;
}

export interface directus_roles {
    id: string;
    admin_access: boolean;
    app_access: boolean;
    description: string | null;
    enforce_tfa: boolean;
    icon: string;
    ip_access: 'csv' | null;
    name: string;
    users: DirectusUsers<MySchema>[] | string[];
}

export interface directus_sessions {
    token: string;
    expires: 'datetime';
    ip: string | null;
    origin: string | null;
    share: DirectusShares<MySchema> | string | null;
    user: DirectusUsers<MySchema> | string | null;
    user_agent: string | null;
}

export interface directus_settings {
    id: number;
    auth_login_attempts: number | null;
    auth_password_policy: string | null;
    basemaps: unknown | null;
    custom_aspect_ratios: unknown | null;
    custom_css: string | null;
    default_appearance: string;
    default_language: string;
    default_theme_dark: string | null;
    default_theme_light: string | null;
    mapbox_key: string | null;
    module_bar: unknown | null;
    project_color: string;
    project_descriptor: string | null;
    project_logo: DirectusFiles<MySchema> | string | null;
    project_name: string;
    project_url: string | null;
    public_background: DirectusFiles<MySchema> | string | null;
    public_favicon: DirectusFiles<MySchema> | string | null;
    public_foreground: DirectusFiles<MySchema> | string | null;
    public_note: string | null;
    storage_asset_presets: unknown | null;
    storage_asset_transform: string | null;
    storage_default_folder: DirectusFolders<MySchema> | string | null;
    theme_dark_overrides: unknown | null;
    theme_light_overrides: unknown | null;
}

export interface directus_shares {
    id: string;
    collection: DirectusCollections<MySchema> | string;
    date_created: 'datetime' | null;
    date_end: 'datetime' | null;
    date_start: 'datetime' | null;
    item: string;
    max_uses: number | null;
    name: string | null;
    password: string | null;
    role: DirectusRoles<MySchema> | string | null;
    times_used: number | null;
    user_created: DirectusUsers<MySchema> | string | null;
}

export interface directus_translations {
    id: string;
    key: string;
    language: string;
    value: string;
}

export interface directus_users {
    id: string;
    appearance: string | null;
    auth_data: unknown | null;
    avatar: DirectusFiles<MySchema> | string | null;
    description: string | null;
    email: string | null;
    email_notifications: boolean | null;
    external_identifier: string | null;
    first_name: string | null;
    language: string | null;
    last_access: 'datetime' | null;
    last_name: string | null;
    last_page: string | null;
    location: string | null;
    password: string | null;
    provider: string;
    role: DirectusRoles<MySchema> | string | null;
    status: string;
    tags: unknown | null;
    tfa_secret: string | null;
    theme_dark: string | null;
    theme_dark_overrides: unknown | null;
    theme_light: string | null;
    theme_light_overrides: unknown | null;
    title: string | null;
    token: string | null;
}

export interface directus_versions {
    id: string;
    collection: DirectusCollections<MySchema> | string;
    date_created: 'datetime' | null;
    date_updated: 'datetime' | null;
    hash: string | null;
    item: string;
    key: string;
    name: string | null;
    user_created: DirectusUsers<MySchema> | string | null;
    user_updated: DirectusUsers<MySchema> | string | null;
}

export interface directus_webhooks {
    id: number;
    actions: 'csv';
    collections: 'csv';
    data: boolean;
    headers: unknown | null;
    method: string;
    name: string;
    status: string;
    url: string;
}

export interface form_fields {
    id: number;
    label: string | null;
    name: string | null;
    options: unknown | null;
    placeholder: string | null;
    required: boolean | null;
    type: string | null;
    value: string | null;
}

export interface form_submissions {
    id: number;
    data: unknown | null;
    form: forms | number | null;
}

export interface forms {
    id: number;
    fields: forms_fields[] | number[];
    name: string | null;
}

export interface forms_fields {
    id: number;
    collection: 'form_fields' | null;
    forms_id: forms | number | null;
    item: form_fields | string | null;
    sort: number | null;
}

export interface menu {
    id: number;
    items: unknown | null;
}

export interface meta {
    key: string;
    value: string | null;
}

export interface offerte {
    id: number;
    bottomImage: DirectusFiles<MySchema> | string | null;
    content: string | null;
    form: forms | number | null;
    topImage: DirectusFiles<MySchema> | string | null;
}

export interface pages {
    id: number;
    blocks: pages_blocks[] | number[];
    children: pages[] | number[];
    hide_in_nav: boolean | null;
    name: string;
    order: number | null;
    parent_id: pages | number | null;
    slug: string | null;
}

export interface pages_blocks {
    id: number;
    collection: 'block_hero' | 'block_image_with_links' | 'block_image_text' | 'block_jumbotron' | 'block_gallery' | 'block_jumbotron_with_blocks' | 'block_numbers' | 'block_cta_card' | 'block_gallery_projects' | null;
    item: block_gallery_projects | block_cta_card | block_numbers | block_jumbotron_with_blocks | block_gallery | block_jumbotron | block_image_text | block_image_with_links | block_hero | string | null;
    pages_id: pages | number | null;
}

export interface projects {
    id: number;
    block_gallery_projects_id: block_gallery_projects | number | null;
    featuredImage: DirectusFiles<MySchema> | string;
    title: string;
}

export interface projects_files {
    id: number;
    directus_files_id: DirectusFiles<MySchema> | string | null;
    projects_id: projects | number | null;
}

export interface site {
    id: number;
    assetsUrl: string | null;
    description: string | null;
    directus_url: string | null;
    home_page: pages | number | null;
    logo: DirectusFiles<MySchema> | string | null;
}