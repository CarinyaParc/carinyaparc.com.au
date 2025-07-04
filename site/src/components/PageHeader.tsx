'use client';

import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * PageHeader component for consistent page headers
 *
 * @example
 * ```tsx
 * // Light variant with left alignment (default)
 * <PageHeader
 *   title="Our Farm"
 *   subtitle="Sustainable Farming"
 *   description="Learn about our regenerative farming practices and how we're working to improve the land."
 * />
 *
 * // Dark variant with center alignment
 * <PageHeader
 *   variant="dark"
 *   align="center"
 *   title="Get Involved"
 *   subtitle="Join Our Community"
 *   description="Discover ways to participate in our regenerative agriculture projects."
 *   backgroundImage="/images/farm-landscape.jpg"
 * />
 */
interface PageHeaderProps {
  variant?: 'light' | 'dark';
  align?: 'left' | 'center';
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  className?: string;
}

export default function PageHeader({
  variant = 'light',
  align = 'left',
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundImageAlt = 'Header background',
  className,
}: PageHeaderProps) {
  const isDark = variant === 'dark';
  const isCenter = align === 'center';

  const textColorClass = isDark ? 'text-white' : 'text-eucalyptus-600';
  const subtitleColorClass = isDark ? 'text-eucalyptus-300' : 'text-eucalyptus-300';
  const descriptionColorClass = isDark ? 'text-eucalyptus-100' : 'text-charcoal-500';
  const bgColorClass = isDark ? 'bg-eucalyptus-600' : 'bg-white';

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden py-24 sm:py-32',
        !backgroundImage && bgColorClass,
        className,
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10 size-full overflow-hidden">
          <motion.div
            className="relative size-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              sizes="100vw"
              className="object-cover object-right md:object-center brightness-75"
              priority
            />
          </motion.div>

          {isDark && (
            <>
              <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-eucalyptus-500 to-eucalyptus-600 opacity-20"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-eucalyptus-500 to-eucalyptus-600 opacity-20"
                />
              </div>
            </>
          )}
        </div>
      )}

      <div className={cn('mx-auto px-6 lg:px-8', isCenter ? 'max-w-2xl text-center' : 'max-w-7xl')}>
        <div className={cn(isCenter ? 'mx-auto text-center' : 'mx-auto lg:mx-0', 'max-w-2xl')}>
          {subtitle && (
            <p className={cn('text-base/7 font-semibold', subtitleColorClass)}>{subtitle}</p>
          )}
          <h1
            className={cn('mt-2 text-4xl font-semibold tracking-tight sm:text-5xl', textColorClass)}
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
        </div>
      </div>
    </div>
  );
}
