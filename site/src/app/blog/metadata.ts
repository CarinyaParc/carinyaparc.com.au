import { Metadata } from 'next';
import { generatePageMetadata } from '@/src/lib/generateMetadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Life on Pasture - Carinya Parc',
  description:
    'Follow our regeneration journey through detailed updates, insights, and lessons learned as we transform Carinya Parc into a thriving ecosystem.',
  path: '/blog',
  image: '/images/img_23.jpg',
  keywords: [
    'blog',
    'farm updates',
    'soil health',
    'biodiversity',
    'water systems',
    'education',
    'wildlife',
    'regenerative practices',
    'seasonal updates',
  ],
});
