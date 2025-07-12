import type { Metadata, ResolvingMetadata, Viewport } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, BASE_URL } from './constants';

type Props = {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Generate viewport config for the page.
 */
export const viewport: Viewport = {
  themeColor: '#4CA77F',
};

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // Determine the current path based on params
  let currentPath = '/';

  // Ensure params is properly awaited before using
  const paramsObj = (await Promise.resolve(params)) || {};

  // Only access the keys after ensuring params is resolved
  const paramKeys = Object.keys(paramsObj);
  if (paramKeys.length > 0) {
    // Handle each param type separately
    if (paramsObj.post) {
      currentPath = `/blog/${paramsObj.post}`;
    } else if (paramsObj.param) {
      currentPath = `/test-canonical/${paramsObj.param}`;
    } else if (paramsObj.slug) {
      // For legal pages, this is handled at the page level via generateMetadata
      // This is a fallback for any other slug-based routes
      currentPath = `/${paramsObj.slug}`;
    }
  }

  // Generate the canonical URL
  const canonicalUrl = `${BASE_URL}${currentPath}`;

  return {
    title: {
      template: `%s | ${SITE_TITLE}`,
      default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
    keywords: [
      'regenerative farming',
      'sustainable agriculture',
      'permaculture',
      'biodiversity',
      'soil health',
      'ecosystem restoration',
      'organic farming',
      'Australia',
      'NSW',
      'The Branch',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: canonicalUrl,
      siteName: SITE_TITLE,
      images: [
        {
          url: `${BASE_URL}/images/hero_image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Carinya Parc regenerative farm landscape',
        },
        ...previousImages,
      ],
      locale: 'en_AU',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: '/site.webmanifest',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(BASE_URL),
  };
}

/**
 * Helper function to generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}): Metadata {
  // Ensure path has a leading slash and normalize it
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BASE_URL}${normalizedPath}`;
  const imageUrl = image ? `${BASE_URL}${image}` : `${BASE_URL}/images/hero_image.jpg`;

  return {
    title,
    description,
    keywords: [...keywords, 'Carinya Parc', 'regenerative farming', 'sustainable agriculture'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_TITLE,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_AU',
      type,
    },
    manifest: '/site.webmanifest',
  };
}
