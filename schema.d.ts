/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/assets/{id}": {
    /**
     * Get an Asset
     * @description Image typed files can be dynamically resized and transformed to fit any need.
     */
    get: operations["getAsset"];
  };
  "/auth/login": {
    /**
     * Retrieve a Temporary Access Token
     * @description Retrieve a Temporary Access Token
     */
    post: operations["login"];
  };
  "/auth/refresh": {
    /**
     * Refresh Token
     * @description Refresh a Temporary Access Token.
     */
    post: operations["refresh"];
  };
  "/auth/logout": {
    /**
     * Log Out
     * @description Log Out
     */
    post: operations["logout"];
  };
  "/auth/password/request": {
    /**
     * Request a Password Reset
     * @description Request a reset password email to be send.
     */
    post: operations["passwordRequest"];
  };
  "/auth/password/reset": {
    /**
     * Reset a Password
     * @description The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
     */
    post: operations["passwordReset"];
  };
  "/auth/oauth": {
    /**
     * List OAuth Providers
     * @description List configured OAuth providers.
     */
    get: operations["oauth"];
  };
  "/auth/oauth/{provider}": {
    /**
     * Authenticated using an OAuth provider
     * @description Start OAuth flow using the specified provider
     */
    get: operations["oauthProvider"];
  };
  "/server/info": {
    /**
     * System Info
     * @description Perform a system status check and return the options.
     */
    get: operations["serverInfo"];
  };
  "/server/ping": {
    /**
     * Ping
     * @description Ping, pong. Ping.. pong.
     */
    get: operations["ping"];
  };
  "/files": {
    /**
     * List Files
     * @description List the files.
     */
    get: operations["getFiles"];
  };
  "/files/{id}": {
    /**
     * Retrieve a Files
     * @description Retrieve a single file by unique identifier.
     */
    get: operations["getFile"];
  };
  "/items/pages": {
    /**
     * List Items
     * @description List the pages items.
     */
    get: operations["readItemsPages"];
  };
  "/items/pages/{id}": {
    /**
     * Retrieve an Item
     * @description Retrieve a single pages item by unique identifier.
     */
    get: operations["readSingleItemsPages"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Query: {
      /**
       * @description Control what fields are being returned in the object.
       * @example [
       *   "*",
       *   "*.*"
       * ]
       */
      fields?: string[];
      /**
       * @example {
       *   "<field>": {
       *     "<operator>": "<value>"
       *   }
       * }
       */
      filter?: Record<string, never>;
      /** @description Filter by items that contain the given search query in one of their fields. */
      search?: string;
      /**
       * @description How to sort the returned items.
       * @example [
       *   "-date_created"
       * ]
       */
      sort?: string[];
      /** @description Set the maximum number of items that will be returned */
      limit?: number;
      /** @description How many items to skip when fetching data. */
      offset?: number;
      /** @description Cursor for use in pagination. Often used in combination with limit. */
      page?: number;
      /**
       * @description Deep allows you to set any of the other query parameters on a nested relational dataset.
       * @example {
       *   "related_articles": {
       *     "_limit": 3
       *   }
       * }
       */
      deep?: Record<string, never>;
    };
    "x-metadata": {
      /** @description Returns the total item count of the collection you're querying. */
      total_count?: number;
      /** @description Returns the item count of the collection you're querying, taking the current filter/search parameters into account. */
      filter_count?: number;
    };
    Files: {
      /**
       * @description Unique identifier for the file.
       * @example 8cbb43fe-4cdf-4991-8352-c461779cec02
       */
      id?: string;
      /**
       * @description Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).
       * @example local
       */
      storage?: string;
      /**
       * @description Name of the file on disk. By default, Directus uses a random hash for the filename.
       * @example a88c3b72-ac58-5436-a4ec-b2858531333a.jpg
       */
      filename_disk?: string;
      /**
       * @description How you want to the file to be named when it's being downloaded.
       * @example avatar.jpg
       */
      filename_download?: string;
      /**
       * @description Title for the file. Is extracted from the filename on upload, but can be edited by the user.
       * @example User Avatar
       */
      title?: string;
      /**
       * @description MIME type of the file.
       * @example image/jpeg
       */
      type?: string;
      /**
       * @description Virtual folder where this file resides in.
       * @example null
       */
      folder?: string | components["schemas"]["Folders"] | null;
      /**
       * @description Who uploaded the file.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      uploaded_by?: string | components["schemas"]["Users"];
      /**
       * Format: date-time
       * @description When the file was uploaded.
       * @example 2019-12-03T00:10:15+00:00
       */
      uploaded_on?: string;
      modified_by?: string | null;
      /** Format: date-time */
      modified_on?: string;
      /**
       * @description Character set of the file.
       * @example binary
       */
      charset?: string | null;
      /**
       * @description Size of the file in bytes.
       * @example 137862
       */
      filesize?: number;
      /**
       * @description Width of the file in pixels. Only applies to images.
       * @example 800
       */
      width?: number | null;
      /**
       * @description Height of the file in pixels. Only applies to images.
       * @example 838
       */
      height?: number | null;
      /**
       * @description Duration of the file in seconds. Only applies to audio and video.
       * @example 0
       */
      duration?: number | null;
      /**
       * @description Where the file was embedded from.
       * @example null
       */
      embed?: string | null;
      /** @description Description for the file. */
      description?: string | null;
      /** @description Where the file was created. Is automatically populated based on EXIF data for images. */
      location?: string | null;
      /** @description Tags for the file. Is automatically populated based on EXIF data for images. */
      tags?: string[] | null;
      /** @description IPTC, EXIF, and ICC metadata extracted from file */
      metadata?: unknown;
    };
    ItemsPages: {
      id?: number;
      name?: string | null;
      parent_id?: number | components["schemas"]["ItemsPages"] | null;
      slug?: string | null;
      order?: number | null;
      hide_in_nav?: boolean | null;
      children?: ((number | components["schemas"]["ItemsPages"])[]) | null;
    };
  };
  responses: {
    /** @description Error: Not found. */
    NotFoundError: {
      content: {
        "application/json": {
          error?: {
            /** Format: int64 */
            code?: number;
            message?: string;
          };
        };
      };
    };
    /** @description Error: Unauthorized request */
    UnauthorizedError: {
      content: {
        "application/json": {
          error?: {
            /** Format: int64 */
            code?: number;
            message?: string;
          };
        };
      };
    };
  };
  parameters: {
    /** @description Index */
    Id: number;
    /** @description Unique identifier for the object. */
    UUId: string;
    /** @description Collection of which you want to retrieve the items from. */
    Collection: string;
    /** @description Filter by items that contain the given search query in one of their fields. */
    Search?: string;
    /** @description Cursor for use in pagination. Often used in combination with limit. */
    Page?: number;
    /** @description How many items to skip when fetching data. */
    Offset?: number;
    /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
    Sort?: string[];
    /** @description What metadata to return in the response. */
    Meta?: string;
    /** @description A limit on the number of objects that are returned. */
    Limit?: number;
    /** @description Select items in collection by given conditions. */
    Filter?: string[];
    /** @description Control what fields are being returned in the object. */
    Fields?: string[];
    /** @description Controls if the API sets a cookie or returns a JWT on successful login. */
    Mode: "jwt" | "cookie";
    /** @description Saves the API response to a file. Accepts one of "csv", "json", "xml", "yaml". */
    Export?: "csv" | "json" | "xml" | "yaml";
    /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
    Version?: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get an Asset
   * @description Image typed files can be dynamically resized and transformed to fit any need.
   */
  getAsset: {
    parameters: {
      query?: {
        /** @description The key of the asset size configured in settings. */
        key?: string;
        /** @description A JSON array of image transformations */
        transforms?: string;
        /** @description Download the asset to your computer */
        download?: boolean;
      };
      path: {
        /** @description The id of the file. */
        id: string;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "text/plain": string;
        };
      };
      404: components["responses"]["NotFoundError"];
    };
  };
  /**
   * Retrieve a Temporary Access Token
   * @description Retrieve a Temporary Access Token
   */
  login: {
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Email address of the user you're retrieving the access token for.
           * @example admin@example.com
           */
          email: string;
          /**
           * Format: password
           * @description Password of the user.
           * @example password
           */
          password: string;
          /**
           * @description Choose between retrieving the token as a string, or setting it as a cookie.
           * @default json
           * @enum {string}
           */
          mode?: "json" | "cookie";
          /** @description If 2FA is enabled, you need to pass the one time password. */
          otp?: string;
        };
      };
    };
    responses: {
      /** @description Successful authentification */
      200: {
        content: {
          "application/json": {
            data?: {
              /** @example eyJhbGciOiJI... */
              access_token?: string;
              /** @example 900 */
              expires?: number;
              /** @example yuOJkjdPXMd... */
              refresh_token?: string;
            };
          };
        };
      };
    };
  };
  /**
   * Refresh Token
   * @description Refresh a Temporary Access Token.
   */
  refresh: {
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description JWT access token you want to refresh. This token can't be expired.
           * @example eyJ0eXAiOiJKV...
           */
          refresh_token?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: {
              /** @example eyJhbGciOiJI... */
              access_token?: string;
              /** @example 900 */
              expires?: number;
              /** @example Gy-caJMpmGTA... */
              refresh_token?: string;
            };
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * Log Out
   * @description Log Out
   */
  logout: {
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description JWT access token you want to logout.
           * @example eyJ0eXAiOiJKV...
           */
          refresh_token?: string;
        };
      };
    };
    responses: {
      /** @description Request successful */
      200: {
        content: never;
      };
    };
  };
  /**
   * Request a Password Reset
   * @description Request a reset password email to be send.
   */
  passwordRequest: {
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Email address of the user you're requesting a reset for.
           * @example admin@example.com
           */
          email: string;
        };
      };
    };
    responses: {
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * Reset a Password
   * @description The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
   */
  passwordReset: {
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description One-time use JWT token that is used to verify the user.
           * @example eyJ0eXAiOiJKV1Qi...
           */
          token: string;
          /**
           * Format: password
           * @description New password for the user.
           * @example password
           */
          password: string;
        };
      };
    };
    responses: {
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * List OAuth Providers
   * @description List configured OAuth providers.
   */
  oauth: {
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            public?: boolean;
            /**
             * @example [
             *   "github",
             *   "facebook"
             * ]
             */
            data?: string[];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * Authenticated using an OAuth provider
   * @description Start OAuth flow using the specified provider
   */
  oauthProvider: {
    parameters: {
      query?: {
        /** @description Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned. */
        redirect?: string;
      };
      path: {
        /** @description Key of the activated OAuth provider. */
        provider: string;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            public?: boolean;
            data?: {
              token?: string;
            };
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * System Info
   * @description Perform a system status check and return the options.
   */
  serverInfo: {
    parameters: {
      query: {
        /** @description The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. */
        super_admin_token: number;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: Record<string, never>;
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  /**
   * Ping
   * @description Ping, pong. Ping.. pong.
   */
  ping: {
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/text": string;
        };
      };
    };
  };
  /**
   * List Files
   * @description List the files.
   */
  getFiles: {
    parameters: {
      query?: {
        fields?: components["parameters"]["Fields"];
        limit?: components["parameters"]["Limit"];
        offset?: components["parameters"]["Offset"];
        sort?: components["parameters"]["Sort"];
        filter?: components["parameters"]["Filter"];
        search?: components["parameters"]["Search"];
        meta?: components["parameters"]["Meta"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Files"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * Retrieve a Files
   * @description Retrieve a single file by unique identifier.
   */
  getFile: {
    parameters: {
      query?: {
        fields?: components["parameters"]["Fields"];
        meta?: components["parameters"]["Meta"];
      };
      path: {
        id: components["parameters"]["UUId"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Files"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * List Items
   * @description List the pages items.
   */
  readItemsPages: {
    parameters: {
      query?: {
        fields?: components["parameters"]["Fields"];
        limit?: components["parameters"]["Limit"];
        meta?: components["parameters"]["Meta"];
        offset?: components["parameters"]["Offset"];
        sort?: components["parameters"]["Sort"];
        filter?: components["parameters"]["Filter"];
        search?: components["parameters"]["Search"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPages"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  /**
   * Retrieve an Item
   * @description Retrieve a single pages item by unique identifier.
   */
  readSingleItemsPages: {
    parameters: {
      query?: {
        fields?: components["parameters"]["Fields"];
        meta?: components["parameters"]["Meta"];
        version?: components["parameters"]["Version"];
      };
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPages"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
}