// src/lib/metadata/openGraph.ts
import type { Metadata } from 'next';

export function generateOpenGraph(config: {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}): NonNullable<Metadata['openGraph']> {
  return {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [{ url: config.imageUrl }],
    siteName: 'Your Site Name',
  };
}
