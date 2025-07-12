// Site metadata
export const SITE_TITLE = 'Carinya Parc';

export const SITE_DESCRIPTION = 'Carinya Parc - Regenerative farming and sustainable living';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://carinyaparc.com.au' : 'http://localhost:3000';

// File paths
export const APP_DIR = process.cwd() + '/src/app';

// Cookies
export const CONSENT_COOKIE_NAME = 'carinya_parc_consent';
export const SESSION_COOKIE_NAME = 'carinya_parc_session';
