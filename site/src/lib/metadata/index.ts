// src/lib/metadata/index.ts
import type { Metadata } from 'next';
import { generateTitle } from './title';
import { generateDescription } from './description';
import { generateOpenGraph } from './openGraph';
import { generateTwitterCard } from './twitter';
import { generateCanonicalUrl } from './canonical';

export interface MetaContext {
  siteName: string;
  defaultDescription: string;
  baseUrl: string;
  path: string;
  pageTitle?: string;
  overrideDescription?: string;
  socialImage?: string;
}

export function generateMetadata(ctx: MetaContext): Metadata {
  const title = generateTitle(ctx.siteName, ctx.pageTitle);
  const description = generateDescription(ctx.defaultDescription, ctx.overrideDescription);
  const url = generateCanonicalUrl(ctx.baseUrl, ctx.path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: generateOpenGraph({
      url,
      title,
      description,
      imageUrl: ctx.socialImage ?? `${ctx.baseUrl}/default-og.jpg`,
    }),
    twitter: generateTwitterCard({
      handle: '@YourHandle',
      site: '@YourSite',
      cardType: 'summary_large_image',
    }),
    robots: {
      index: true,
      follow: true,
    },
  };
}
