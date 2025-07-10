'use client';

import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { ResponsiveImage } from './ResponsiveImage';

export function Hero({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative isolate overflow-hidden', className)}>
      {children}
    </div>
  );
}

export function HeroContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative z-10',
        className
      )}
    >
      {children}
    </div>
  );
}

export function HeroImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('absolute inset-0 -z-10', className)}>{children}</div>;
}

// Updated to use ResponsiveImage
export function HeroBackgroundImage({
  src,
  alt,
  className,
  priority = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <HeroImage>
      <ResponsiveImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn('absolute inset-0 -z-10 opacity-80 brightness-50', className)}
      />
    </HeroImage>
  );
}

export function HeroTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        'text-5xl/[1.1] font-semibold tracking-tight text-balance text-white sm:text-6xl/[1.1] lg:text-7xl/[1.1]',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function HeroText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'mt-6 text-lg/8 text-white/85 text-pretty max-w-3xl mx-auto sm:text-xl/8',
        className
      )}
    >
      {children}
    </p>
  );
}

export function HeroLocation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-4 text-lg/8 text-white/75 font-medium', className)}>
      {children}
    </div>
  );
}

export function HeroActions({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-10 flex flex-wrap items-center gap-6', className)}>
      {children}
    </div>
  );
}

export function HeroButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md bg-eucalyptus-600 px-5 py-3 text-base/7 font-semibold text-white shadow-sm hover:bg-eucalyptus-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus-600',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function HeroSecondaryButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md bg-white/10 px-5 py-3 text-base/7 font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30',
        className
      )}
    >
      {children}
    </Link>
  );
}
