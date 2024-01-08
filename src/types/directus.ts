export type BlockCtaCard = {
    button?: number | Buttons | null;
    description?: string | null;
    id: number;
    image?: string | DirectusFiles | null;
    title?: string | null;
    useButton?: boolean | null;
  };
  
  export type BlockGallery = {
    cta: string;
    ctaButton?: number | Buttons | null;
    ctaText?: string | null;
    displayCta?: boolean | null;
    galleryItems: any[] | BlockGalleryFiles[];
    id: number;
    instagramButton?: number | Buttons | null;
    showInstagramButton?: boolean | null;
  };
  
  export type BlockGalleryFiles = {
    block_gallery_id?: number | BlockGallery | null;
    directus_files_id?: string | DirectusFiles | null;
    id: number;
  };
  
  export type BlockHero = {
    background_type: string;
    button?: number | Buttons | null;
    headline?: string | null;
    id: number;
    image?: string | DirectusFiles | null;
    show_button?: boolean | null;
    video?: string | DirectusFiles | null;
  };
  
  export type BlockImageText = {
    button?: number | Buttons | null;
    id: number;
    image?: string | DirectusFiles | null;
    text?: string | null;
    title?: string | null;
    useButton?: boolean | null;
    variant?: string | null;
  };
  
  export type BlockImageWithLinks = {
    id: number;
    image?: string | DirectusFiles | null;
    links?: unknown | null;
    title?: string | null;
  };
  
  export type BlockJumbotron = {
    applyNegativeMargin?: boolean | null;
    id: number;
    text?: string | null;
    title?: string | null;
  };
  
  export type BlockJumbotronWithBlocks = {
    bottomLeftBlock: string;
    bottomLeftBlockContent: string;
    bottomRightBlock: string;
    bottomRightImage?: string | DirectusFiles | null;
    id: number;
    topBlock: string;
    topBlockButton?: number | Buttons | null;
    topBlockText?: string | null;
    topBlockTitle?: string | null;
  };
  
  export type BlockNumbers = {
    id: number;
    numbers?: unknown | null;
  };
  
  export type Buttons = {
    id: number;
    label?: string | null;
    link?: string | null;
    outline?: boolean | null;
    smallButton?: boolean | null;
    variant?: string | null;
  };
  
  export type DirectusActivity = {
    action: string;
    collection: string;
    comment?: string | null;
    id: number;
    ip?: string | null;
    item: string;
    origin?: string | null;
    revisions: any[] | DirectusRevisions[];
    timestamp: string;
    user?: string | DirectusUsers | null;
    user_agent?: string | null;
  };
  
  export type DirectusCollections = {
    accountability?: string | null;
    archive_app_filter: boolean;
    archive_field?: string | null;
    archive_value?: string | null;
    collapse: string;
    collection: string;
    color?: string | null;
    display_template?: string | null;
    group?: string | DirectusCollections | null;
    hidden: boolean;
    icon?: string | null;
    item_duplication_fields?: unknown | null;
    note?: string | null;
    preview_url?: string | null;
    singleton: boolean;
    sort?: number | null;
    sort_field?: string | null;
    translations?: unknown | null;
    unarchive_value?: string | null;
    versioning: boolean;
  };
  
  export type DirectusDashboards = {
    color?: string | null;
    date_created?: string | null;
    icon: string;
    id: string;
    name: string;
    note?: string | null;
    panels: any[] | DirectusPanels[];
    user_created?: string | DirectusUsers | null;
  };
  
  export type DirectusExtensions = {
    enabled: boolean;
    name: string;
  };
  
  export type DirectusFields = {
    collection: string | DirectusCollections;
    conditions?: unknown | null;
    display?: string | null;
    display_options?: unknown | null;
    field: string;
    group?: string | DirectusFields | null;
    hidden: boolean;
    id: number;
    interface?: string | null;
    note?: string | null;
    options?: unknown | null;
    readonly: boolean;
    required?: boolean | null;
    sort?: number | null;
    special?: unknown | null;
    translations?: unknown | null;
    validation?: unknown | null;
    validation_message?: string | null;
    width?: string | null;
  };
  
  export type DirectusFiles = {
    charset?: string | null;
    description?: string | null;
    duration?: number | null;
    embed?: string | null;
    filename_disk?: string | null;
    filename_download: string;
    filesize?: number | null;
    folder?: string | DirectusFolders | null;
    height?: number | null;
    id: string;
    location?: string | null;
    metadata?: unknown | null;
    modified_by?: string | DirectusUsers | null;
    modified_on: string;
    storage: string;
    tags?: unknown | null;
    title?: string | null;
    type?: string | null;
    uploaded_by?: string | DirectusUsers | null;
    uploaded_on: string;
    width?: number | null;
  };
  
  export type DirectusFlows = {
    accountability?: string | null;
    color?: string | null;
    date_created?: string | null;
    description?: string | null;
    icon?: string | null;
    id: string;
    name: string;
    operation?: string | DirectusOperations | null;
    operations: any[] | DirectusOperations[];
    options?: unknown | null;
    status: string;
    trigger?: string | null;
    user_created?: string | DirectusUsers | null;
  };
  
  export type DirectusFolders = {
    id: string;
    name: string;
    parent?: string | DirectusFolders | null;
  };
  
  export type DirectusMigrations = {
    name: string;
    timestamp?: string | null;
    version: string;
  };
  
  export type DirectusNotifications = {
    collection?: string | null;
    id: number;
    item?: string | null;
    message?: string | null;
    recipient: string | DirectusUsers;
    sender?: string | DirectusUsers | null;
    status?: string | null;
    subject: string;
    timestamp?: string | null;
  };
  
  export type DirectusOperations = {
    date_created?: string | null;
    flow: string | DirectusFlows;
    id: string;
    key: string;
    name?: string | null;
    options?: unknown | null;
    position_x: number;
    position_y: number;
    reject?: string | DirectusOperations | null;
    resolve?: string | DirectusOperations | null;
    type: string;
    user_created?: string | DirectusUsers | null;
  };
  
  export type DirectusPanels = {
    color?: string | null;
    dashboard: string | DirectusDashboards;
    date_created?: string | null;
    height: number;
    icon?: string | null;
    id: string;
    name?: string | null;
    note?: string | null;
    options?: unknown | null;
    position_x: number;
    position_y: number;
    show_header: boolean;
    type: string;
    user_created?: string | DirectusUsers | null;
    width: number;
  };
  
  export type DirectusPermissions = {
    action: string;
    collection: string;
    fields?: unknown | null;
    id: number;
    permissions?: unknown | null;
    presets?: unknown | null;
    role?: string | DirectusRoles | null;
    validation?: unknown | null;
  };
  
  export type DirectusPresets = {
    bookmark?: string | null;
    collection?: string | null;
    color?: string | null;
    filter?: unknown | null;
    icon?: string | null;
    id: number;
    layout?: string | null;
    layout_options?: unknown | null;
    layout_query?: unknown | null;
    refresh_interval?: number | null;
    role?: string | DirectusRoles | null;
    search?: string | null;
    user?: string | DirectusUsers | null;
  };
  
  export type DirectusRelations = {
    id: number;
    junction_field?: string | null;
    many_collection: string;
    many_field: string;
    one_allowed_collections?: unknown | null;
    one_collection?: string | null;
    one_collection_field?: string | null;
    one_deselect_action: string;
    one_field?: string | null;
    sort_field?: string | null;
  };
  
  export type DirectusRevisions = {
    activity: number | DirectusActivity;
    collection: string;
    data?: unknown | null;
    delta?: unknown | null;
    id: number;
    item: string;
    parent?: number | DirectusRevisions | null;
    version?: string | DirectusVersions | null;
  };
  
  export type DirectusRoles = {
    admin_access: boolean;
    app_access: boolean;
    description?: string | null;
    enforce_tfa: boolean;
    icon: string;
    id: string;
    ip_access?: unknown | null;
    name: string;
    users: any[] | DirectusUsers[];
  };
  
  export type DirectusSessions = {
    expires: string;
    ip?: string | null;
    origin?: string | null;
    share?: string | DirectusShares | null;
    token: string;
    user?: string | DirectusUsers | null;
    user_agent?: string | null;
  };
  
  export type DirectusSettings = {
    auth_login_attempts?: number | null;
    auth_password_policy?: string | null;
    basemaps?: unknown | null;
    custom_aspect_ratios?: unknown | null;
    custom_css?: string | null;
    default_appearance: string;
    default_language: string;
    default_theme_dark?: string | null;
    default_theme_light?: string | null;
    id: number;
    mapbox_key?: string | null;
    module_bar?: unknown | null;
    project_color: string;
    project_descriptor?: string | null;
    project_logo?: string | DirectusFiles | null;
    project_name: string;
    project_url?: string | null;
    public_background?: string | DirectusFiles | null;
    public_favicon?: string | DirectusFiles | null;
    public_foreground?: string | DirectusFiles | null;
    public_note?: string | null;
    storage_asset_presets?: unknown | null;
    storage_asset_transform?: string | null;
    storage_default_folder?: string | DirectusFolders | null;
    theme_dark_overrides?: unknown | null;
    theme_light_overrides?: unknown | null;
    theming_group: string;
  };
  
  export type DirectusShares = {
    collection: string | DirectusCollections;
    date_created?: string | null;
    date_end?: string | null;
    date_start?: string | null;
    id: string;
    item: string;
    max_uses?: number | null;
    name?: string | null;
    password?: string | null;
    role?: string | DirectusRoles | null;
    times_used?: number | null;
    user_created?: string | DirectusUsers | null;
  };
  
  export type DirectusTranslations = {
    id: string;
    key: string;
    language: string;
    value: string;
  };
  
  export type DirectusUsers = {
    appearance?: string | null;
    auth_data?: unknown | null;
    avatar?: string | DirectusFiles | null;
    description?: string | null;
    email?: string | null;
    email_notifications?: boolean | null;
    external_identifier?: string | null;
    first_name?: string | null;
    id: string;
    language?: string | null;
    last_access?: string | null;
    last_name?: string | null;
    last_page?: string | null;
    location?: string | null;
    password?: string | null;
    provider: string;
    role?: string | DirectusRoles | null;
    status: string;
    tags?: unknown | null;
    tfa_secret?: string | null;
    theme_dark?: string | null;
    theme_dark_overrides?: unknown | null;
    theme_light?: string | null;
    theme_light_overrides?: unknown | null;
    title?: string | null;
    token?: string | null;
  };
  
  export type DirectusVersions = {
    collection: string | DirectusCollections;
    date_created?: string | null;
    date_updated?: string | null;
    hash?: string | null;
    id: string;
    item: string;
    key: string;
    name?: string | null;
    user_created?: string | DirectusUsers | null;
    user_updated?: string | DirectusUsers | null;
  };
  
  export type DirectusWebhooks = {
    actions: unknown;
    collections: unknown;
    data: boolean;
    headers?: unknown | null;
    id: number;
    method: string;
    name: string;
    status: string;
    url: string;
  };
  
  export type Menu = {
    id: number;
    items?: unknown | null;
  };
  
  export type Meta = {
    key: string;
    value?: string | null;
  };
  
  export type Pages = {
    blocks: any[] | PagesBlocks[];
    children: any[] | Pages[];
    hide_in_nav?: boolean | null;
    id: number;
    name?: string | null;
    order?: number | null;
    parent_id?: number | Pages | null;
    slug?: string | null;
  };
  
  export type PagesBlocks = {
    collection?: string | null;
    id: number;
    item?: string | any | null;
    pages_id?: number | Pages | null;
  };
  
  export type Site = {
    assetsUrl?: string | null;
    description?: string | null;
    directus_url?: string | null;
    home_page?: number | Pages | null;
    id: number;
    logo?: string | DirectusFiles | null;
  };
  
  export type CustomDirectusTypes = {
    block_cta_card: BlockCtaCard[];
    block_gallery: BlockGallery[];
    block_gallery_files: BlockGalleryFiles[];
    block_hero: BlockHero[];
    block_image_text: BlockImageText[];
    block_image_with_links: BlockImageWithLinks[];
    block_jumbotron: BlockJumbotron[];
    block_jumbotron_with_blocks: BlockJumbotronWithBlocks[];
    block_numbers: BlockNumbers[];
    buttons: Buttons[];
    directus_activity: DirectusActivity[];
    directus_collections: DirectusCollections[];
    directus_dashboards: DirectusDashboards[];
    directus_extensions: DirectusExtensions[];
    directus_fields: DirectusFields[];
    directus_files: DirectusFiles[];
    directus_flows: DirectusFlows[];
    directus_folders: DirectusFolders[];
    directus_migrations: DirectusMigrations[];
    directus_notifications: DirectusNotifications[];
    directus_operations: DirectusOperations[];
    directus_panels: DirectusPanels[];
    directus_permissions: DirectusPermissions[];
    directus_presets: DirectusPresets[];
    directus_relations: DirectusRelations[];
    directus_revisions: DirectusRevisions[];
    directus_roles: DirectusRoles[];
    directus_sessions: DirectusSessions[];
    directus_settings: DirectusSettings;
    directus_shares: DirectusShares[];
    directus_translations: DirectusTranslations[];
    directus_users: DirectusUsers[];
    directus_versions: DirectusVersions[];
    directus_webhooks: DirectusWebhooks[];
    menu: Menu;
    meta: Meta[];
    pages: Pages[];
    pages_blocks: PagesBlocks[];
    site: Site;
  };
  