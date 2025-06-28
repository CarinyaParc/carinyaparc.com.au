'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

// Main container component
interface SectionWithImageTilesProps {
  children: ReactNode;
  className?: string;
}

export function SectionWithImageTiles({ children, className = '' }: SectionWithImageTilesProps) {
  return (
    <div className={`overflow-hidden bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

// Header components
export function SectionHeader({ children }: { children: ReactNode }) {
  return <div className="max-w-4xl">{children}</div>;
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <div className="text-base/7 font-semibold text-eucalyptus-300">{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-eucalyptus-600 sm:text-5xl">
      {children}
    </h1>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return <div className="my-6 text-xl/8 text-balance text-charcoal-600">{children}</div>;
}

// Content section
export function SectionContent({ children }: { children: ReactNode }) {
  return <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">{children}</section>;
}

// Text content
export function TextContent({ children }: { children: ReactNode }) {
  return <div className="lg:pr-8">{children}</div>;
}

export function ContentHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-semibold tracking-tight text-pretty text-eucalyptus-600">{children}</h2>;
}

export function ContentParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-base/7 text-charcoal-600">{children}</p>;
}

// Image tiles
export function ImageTiles({ children }: { children: ReactNode }) {
  return (
    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
      <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
        {children}
      </div>
    </div>
  );
}

export function ImageTile({ src, alt = '', offset = false }: { src: string; alt?: string; offset?: boolean }) {
  return (
    <div
      className={`${
        offset ? '-mt-8 lg:-mt-40' : ''
      } aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-eucalyptus-100/20 relative`}
    >
      <Image 
        alt={alt} 
        src={src} 
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

// Stats section
export function StatsSection({ children }: { children: ReactNode }) {
  return (
    <div className="max-lg:mt-16 lg:col-span-1">
      {children}
    </div>
  );
}

export function StatsLabel({ children }: { children: ReactNode }) {
  return <p className="text-base/7 font-semibold text-eucalyptus-600">{children}</p>;
}

export function StatsDivider() {
  return <hr className="mt-6 border-t border-eucalyptus-100/30" />;
}

export function StatsGrid({ children }: { children: ReactNode }) {
  return <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">{children}</dl>;
}

export function StatItem({ 
  label, 
  value, 
  suffix = '', 
  lastInRow = false 
}: { 
  label: string; 
  value: string | number; 
  suffix?: string;
  lastInRow?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-y-2 ${!lastInRow ? 'border-b border-dotted border-eucalyptus-100/30 pb-4' : ''} ${lastInRow && !suffix ? 'max-sm:border-b max-sm:border-dotted max-sm:border-eucalyptus-100/30 max-sm:pb-4' : ''}`}>
      <dt className="text-sm/6 text-gray-600">{label}</dt>
      <dd className="order-first text-6xl font-semibold tracking-tight text-eucalyptus-600">
        {suffix && suffix.startsWith('$') && '$'}<span>{value}</span>{suffix && !suffix.startsWith('$') ? suffix : ''}
      </dd>
    </div>
  );
}
