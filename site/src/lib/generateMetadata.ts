import type { Metadata, ResolvingMetadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, BASE_URL } from './constants';

type Props = {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

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
      canonical: BASE_URL,
    },
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: BASE_URL,
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
    themeColor: '#4CA77F',
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
  const url = `${BASE_URL}${path}`;
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
