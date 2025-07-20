import path from 'path';

// Site metadata
export const SITE_TITLE = 'Carinya Parc';
export const SITE_DESCRIPTION = 'Carinya Parc - Regenerative farming and sustainable living';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://carinyaparc.com.au' : 'http://localhost:3000';

// Social defaults
export const DEFAULT_SOCIAL_IMAGE = '/default-og.jpg';
export const TWITTER_HANDLE = '@carinyaparc';
export const TWITTER_CARD_TYPE = 'summary_large_image';

// JSON‑LD schema defaults
export const ORG_LOGO_URL = `${BASE_URL}/logo.png`;
export const ORG_LOGO_WIDTH = 600;
export const ORG_LOGO_HEIGHT = 600;

// Article schema defaults
export const DEFAULT_ARTICLE_SECTION = 'Blog';
export const DEFAULT_ARTICLE_WORD_COUNT = 2000;
export const DEFAULT_ARTICLE_KEYWORDS =
  'regenerative farming, sustainable agriculture, permaculture';
export const DEFAULT_ARTICLE_IMAGE = '/images/hero_image.jpg';
export const DEFAULT_AUTHOR_NAME = 'Jonathan Daddia';
export const DEFAULT_AUTHOR_URL_PATH = '/about/jonathan';

// Article "about" topic
export const ARTICLE_ABOUT_TOPIC = {
  name: 'Regenerative Agriculture',
  description: 'Sustainable farming practices that restore soil health and biodiversity',
};

// Blog defaults
export const BLOG_NAME = `${SITE_TITLE} Blog`;
export const BLOG_URL_PATH = '/blog';

// Breadcrumb defaults
export const DEFAULT_BREADCRUMB_HOME = { name: 'Home', url: BASE_URL, position: 1 };

// File‑system paths (build‑time only)
export const APP_DIR = path.join(process.cwd(), 'src', 'app');

// Cookies
export const CONSENT_COOKIE_NAME = 'carinya_parc_consent';
export const SESSION_COOKIE_NAME = 'carinya_parc_session';
