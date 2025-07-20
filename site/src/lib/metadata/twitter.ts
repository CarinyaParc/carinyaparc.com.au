// src/lib/metadata/twitter.ts
import type { Metadata } from 'next';

export function generateTwitterCard(config: {
  handle: string;
  site?: string;
  cardType?: 'summary' | 'summary_large_image';
}): NonNullable<Metadata['twitter']> {
  return {
    card: config.cardType ?? 'summary_large_image',
    title: config.cardType,
    creator: config.handle,
    site: config.site,
  };
}
