import { Metadata } from 'next';
import Image from 'next/image';
import { Shovel, Sprout, Newspaper } from 'lucide-react';
import PageHeader from '@/src/components/sections/PageHeader';
import { generatePageMetadata } from '@/src/lib/generateMetadata';
import SubscribeForm from '@/src/components/forms/SubscribeForm';
import { SchemaMarkup } from '@/src/components/ui/SchemaMarkup';
import { Breadcrumb } from '@/src/components/ui/Breadcrumb';

import {
  SectionWithImage,
  SectionImage,
  SectionContent,
  SectionSubtitle,
  SectionTitle,
  SectionText,
} from '@/src/components/sections/SectionWithImage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Subscribe - Carinya Parc',
  description:
    'Stay connected to our regenerative journey at Carinya Parc to receive thoughtful, seasonal updates directly from the farm to your inbox.',
  path: '/subscribe',
  image: '/images/img_5.jpg',
  keywords: [
    'subscribe',
    'newsletter',
    'farm updates',
    'seasonal content',
    'community',
    'stay connected',
    'farm news',
    'join mailing list',
  ],
});

const pageHeaderProps = {
  variant: 'light' as const,
  align: 'center' as const,
  title: 'Stay Connected to The Land',
  subtitle: 'Subscribe',
  description:
    'Stay connected to our regenerative journey at Carinya Parc to receive thoughtful, seasonal updates directly from the farm to your inbox.',
};

export default function SubscribePage() {
  return (
    <>
      {/* Schema markup for subscribe page */}
      <SchemaMarkup type="page" />

      <main className="isolate min-h-screen">
        {/* Breadcrumb navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb />
        </div>

        {/* Page Header */}
        <section>
          <PageHeader {...pageHeaderProps} />
        </section>

        <SectionWithImage variant="light" imagePosition="left">
          <SectionImage>
            <Image src="/images/img_5.jpg" alt="Farm gate" fill className="object-cover" priority />
          </SectionImage>
          <SectionContent>
            <SectionSubtitle>Join the Community</SectionSubtitle>
            <SectionTitle>Subscribe to our Newsletter</SectionTitle>
            <SectionText>
              When you join our mailing list, you'll be the first to receive:
              <ul role="list" className="mt-8 space-y-6">
                <li className="flex gap-x-3">
                  <Shovel className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Invitations to Participate:</strong> Early
                    notifications about planting days, workshops and volunteer opportunities
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Sprout className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Seasonal Inspiration:</strong> Recipes and
                    cooking tips that follow the rhythm of our developing gardens
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Newspaper className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Regeneration Stories:</strong> Photo-rich
                    updates showing the transformation of our landscape over time
                  </span>
                </li>
              </ul>
              <SubscribeForm />
            </SectionText>
          </SectionContent>
        </SectionWithImage>

        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-xl font-semibold leading-7 text-eucalyptus-300">
                What Can You Expect?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-eucalyptus-600 sm:text-4xl">
                Authentic Stories
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal-600">
                Our newsletter shares the genuine journey of Carinya Parc. Our successes and
                failures, our joys and our challenges. We want to help others learn from our
                experiences and connect with the land.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-eucalyptus-600">
                    Seasonal Rhythm
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                    <p className="flex-auto">
                      Nature moves in cycles, and so do our updates. Expect content that reflects
                      what's happening on the farm right now—from winter planning to summer
                      abundance.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-eucalyptus-600">
                    Practical Value
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                    <p className="flex-auto">
                      Every edition includes something you can use — whether it's a seasonal recipe,
                      a gardening tip, or insights you can apply to your own relationship with food
                      and land.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-eucalyptus-600">
                    Privacy Commitment
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                    <p className="flex-auto">
                      We care deeply about your trust. Your information is never shared with third
                      parties, and we use it solely to send you the updates you've requested.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
