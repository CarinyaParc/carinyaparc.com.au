'use client';

import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface TileImage {
  src: string;
  alt?: string;
}

interface Button {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

/**
 * HeroWithTiles component for hero sections with image tiles
 *
 * @example
 * ```tsx
 * // Light variant with default left alignment
 * <HeroWithTiles
 *   title="Regenerative Farming"
 *   subtitle="Our Approach"
 *   description="Discover how we're implementing regenerative practices that improve soil health and biodiversity."
 *   primaryButton={{ label: "Learn More", href: "/regenerate", variant: "primary" }}
 *   secondaryButton={{ label: "Get Involved", href: "/get-involved", variant: "secondary" }}
 *   tileImages={[
 *     { src: "/images/farm-1.jpg", alt: "Farm landscape" },
 *     { src: "/images/farm-2.jpg", alt: "Native plants" },
 *     { src: "/images/farm-3.jpg", alt: "Soil regeneration" },
 *     { src: "/images/farm-4.jpg", alt: "Wildlife habitat" },
 *     { src: "/images/farm-5.jpg", alt: "Water management" }
 *   ]}
 * />
 *
 * // Dark variant
 * <HeroWithTiles
 *   variant="dark"
 *   title="Sustainable Agriculture"
 *   description="Our commitment to ecological farming practices that regenerate the land."
 *   tileImages={[...]}
 * />
 */
interface HeroWithTilesProps {
  variant?: 'light' | 'dark';
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  tileImages: TileImage[];
  className?: string;
}

export default function HeroWithTiles({
  variant = 'light',
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  tileImages,
  className,
}: HeroWithTilesProps) {
  const isDark = variant === 'dark';

  const textColorClass = isDark ? 'text-white' : 'text-eucalyptus-600';
  const subtitleColorClass = isDark ? 'text-eucalyptus-300' : 'text-eucalyptus-400';
  const descriptionColorClass = isDark ? 'text-eucalyptus-100' : 'text-charcoal-500';
  const primaryButtonClass = isDark
    ? 'bg-eucalyptus-600 text-white hover:bg-eucalyptus-500'
    : 'bg-eucalyptus-600 text-white hover:bg-eucalyptus-500';
  const secondaryButtonClass = isDark ? 'text-white' : 'text-charcoal-900';
  const backgroundClass = isDark
    ? 'from-eucalyptus-600 to-eucalyptus-800'
    : 'from-eucalyptus-100 to-eucalyptus-300';

  return (
    <div className={cn('relative isolate', className)}>
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
          className={cn(
            'aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr opacity-30',
            backgroundClass,
          )}
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              {subtitle && (
                <p className={cn('text-base/7 font-semibold mb-2', subtitleColorClass)}>
                  {subtitle}
                </p>
              )}
              <h1
                className={cn(
                  'text-5xl font-semibold tracking-tight text-pretty sm:text-7xl',
                  textColorClass,
                )}
              >
                {title}
              </h1>
              {description && (
                <p
                  className={cn(
                    'mt-8 text-lg font-medium text-pretty sm:text-xl/8',
                    descriptionColorClass,
                  )}
                >
                  {description}
                </p>
              )}
              {(primaryButton || secondaryButton) && (
                <div className="mt-10 flex items-center gap-x-6">
                  {primaryButton && (
                    <Link
                      href={primaryButton.href}
                      className={cn(
                        'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus-600',
                        primaryButtonClass,
                      )}
                    >
                      {primaryButton.label}
                    </Link>
                  )}
                  {secondaryButton && (
                    <Link
                      href={secondaryButton.href}
                      className={cn('text-sm/6 font-semibold', secondaryButtonClass)}
                    >
                      {secondaryButton.label} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {tileImages.length > 0 && (
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                {tileImages.length >= 1 && (
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <Image
                        alt={tileImages[0]?.alt || ''}
                        src={tileImages[0]?.src || '/placeholder.jpg'}
                        width={176}
                        height={264}
                        className="aspect-[2/3] w-full rounded-xl bg-charcoal-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-charcoal-900/10 ring-inset" />
                    </div>
                  </div>
                )}

                {tileImages.length >= 3 && (
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        alt={tileImages[1]?.alt || ''}
                        src={tileImages[1]?.src || '/placeholder.jpg'}
                        width={176}
                        height={264}
                        className="aspect-[2/3] w-full rounded-xl bg-charcoal-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-charcoal-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt={tileImages[2]?.alt || ''}
                        src={tileImages[2]?.src || '/placeholder.jpg'}
                        width={176}
                        height={264}
                        className="aspect-[2/3] w-full rounded-xl bg-charcoal-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-charcoal-900/10 ring-inset" />
                    </div>
                  </div>
                )}

                {tileImages.length >= 5 && (
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        alt={tileImages[3]?.alt || ''}
                        src={tileImages[3]?.src || '/placeholder.jpg'}
                        width={176}
                        height={264}
                        className="aspect-[2/3] w-full rounded-xl bg-charcoal-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-charcoal-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt={tileImages[4]?.alt || ''}
                        src={tileImages[4]?.src || '/placeholder.jpg'}
                        width={176}
                        height={264}
                        className="aspect-[2/3] w-full rounded-xl bg-charcoal-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-charcoal-900/10 ring-inset" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
