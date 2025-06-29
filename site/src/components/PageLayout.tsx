import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  variant?: 'full' | 'wide' | 'center' | 'narrow';
  className?: string;
  override?: boolean;
}

export function PageLayout({
  children,
  variant = 'wide',
  className = '',
  override = false,
}: PageLayoutProps) {
  const variants = {
    full: 'w-full',
    wide: 'container mx-auto max-w-7xl sm:px-6 lg:px-8',
    center: 'container mx-auto max-w-4xl px-4 prose prose-eucalyptus',
    narrow: 'container mx-auto max-w-2xl px-4 prose prose-eucalyptus prose-sm',
  };

  // If this is an override, wrap in min-h-screen
  if (override) {
    return (
      <div className="min-h-screen">
        <div className={`${variants[variant]} ${className}`}>{children}</div>
      </div>
    );
  }

  // Default layout (used by page wrapper)
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
