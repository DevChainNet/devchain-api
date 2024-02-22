'use strict';

//  MODULES
import dotenv from 'dotenv';

// INTERFACES
import config_i from 'interfaces/config';

// Bind .env file to the process.env;
const env = dotenv.config();

if (env.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: config_i = {
  endpoints: {
    // STATIC ENDPOINTS
    public: '/public',
    public_image: '/public/images/:id',

    // AUTH ENDPOINTS
    auth_root: '/',
    auth_profile: '/profile',
    auth_signin: '/signin',
    auth_signup: '/signup',
    auth_signout: '/signout',
    auth_email_verify: '/email-verify/:token',
    auth_email_change: '/email-change',
    auth_password_change: '/password-change',
    auth_password_reset: '/password-reset/:token',

    // EMAIL ENDPOINTS
    mail_send_verification_link: '/email-send-verification-link',
    mail_send_password_reset_link: '/email-send-password-reset-link',
    mail_send: '/email-send',
    mail_subscriptions: '/email-subscriptions',

    settings: '/settings',
    settings_banners: '/settings/banners',
    settings_campaigns: '/settings/campaigns',
    settings_notifications: '/settings/notifications',
    settings_faq: '/settings/faq',

    stores: '/stores',
    stores_store: '/stores/:name',

    products: '/products',
    products_favs: '/products/favs',

    // BLOCKCHAIN ENDPOINTS

    // tokens
    blockchain_tokens: '/tokens',

    // GoPlusLabs
    blockchain_token_security: '/token_security/:chain_id',
    blockchain_address_security: '/address_security/:address',
    blockchain_approval_security: '/approval_security/:chain_id',
    blockchain_nft_security: '/nft_security/:chain_id',
    blockchain_dapp_security: '/dapp_security',
    blockchain_pishing_site: '/pishing_site',
    blockchain_rugpull_detecting: '/rugpull_detecting/:chain_id',
    blockchain_input_decode: '/input_decode',

    blockchain_factory: '/factory',

    // 0x API
    blockchain_swap_quote: '/swap/quote',
    blockchain_swap_price: '/swap/price',

    // EXTERA
    extera_forms: '/extera/forms',
  },
  env: {
    PORT: process.env.PORT || '3000',
    HOST: process.env.HOST || '127.0.0.1',

    NODE_ENV: process.env.NODE_ENV || 'prod',

    // serverside cookie session kaciriyosun_sid
    SESSION_SECRET: process.env.SESSION_SECRET || '',
    SESSION_LIFETIME: 1000 * 60 * 60 * (24 * 60),
    SESSION_LIFETIME_MS: 1000 * 60 * 60 * (24 * 60),
    SESSION_NAME: process.env.SESSION_NAME || '',

    DB_CONN_STR: process.env.DB_CONN_STR || '',
    DB_NAME: process.env.DB_NAME || '',

    PERM_ADMIN: process.env.PERM_ADMIN || '',
    PERM_USER: process.env.PERM_USER || '',

    EMAIL_HOST: process.env.EMAIL_HOST || '',
    EMAIL_NO_REPLY_USERNAME: process.env.EMAIL_NO_REPLY_USERNAME || '',
    EMAIL_NO_REPLY_PASSWORD: process.env.EMAIL_NO_REPLY_PASSWORD || '',

    URL_API: process.env.URL_API || '',
    URL_UI: process.env.URL_UI || '',

    SECRET_KEY_CAPTCHA: process.env.SECRET_KEY_CAPTCHA || '',

    // API KEYS
    API_KEY_0X: process.env.API_KEY_0X || '',

    API_KEY_ETHERSCAN: process.env.API_KEY_ETHERSCAN || '',
    API_KEY_BSCSCAN: process.env.API_KEY_BSCSCAN || '',
    API_KEY_ARBISCAN: process.env.API_KEY_ARBISCAN || '',
    API_KEY_POLYGONSCAN: process.env.API_KEY_POLYGONSCAN || '',
    API_KEY_FTMSCAN: process.env.API_KEY_FTMSCAN || '',
    API_KEY_CELOSCAN: process.env.API_KEY_CELOSCAN || '',
  },
  roles: {
    admin: 'admin',
    user: 'user',
  },
  times: {
    one_min_ms: 1000 * 60,
    one_hour_ms: 1000 * 60 * 60,
    one_day_ms: 1000 * 60 * 60 * 24,
    one_hour_s: 3600,
  },
  types: {
    objectId: 'objectId',
    string: 'string',
    number: 'number',
    int: 'int',
    float: 'float',
    date: 'date',
    double: 'double',
    boolean: 'boolean',
    bool: 'bool',
    object: 'object',
    array: 'array',
    function: 'function',
    null: 'null',
    undefined: 'undefined',
  },
};

Object.freeze(config);

export default config;
