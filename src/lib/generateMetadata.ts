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
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: BASE_URL,
      siteName: SITE_TITLE,
      images: [...previousImages],
      locale: 'en_AU',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(BASE_URL),
  };
}
