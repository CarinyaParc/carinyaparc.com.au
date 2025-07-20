import '@/src/styles/globals.css';

import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { draftMode } from 'next/headers';
import { cookies } from 'next/headers';
import { fontClassNames } from '../lib/font';
import { CONSENT_COOKIE_NAME } from '@/src/lib/constants';

import { navigation } from './navigation';
import Banner from '@/src/components/ui/Banner';
import Header from '@/src/components/layouts/Header';
import Newsletter from '@/src/components/ui/Newsletter';
import Footer from '@/src/components/layouts/Footer';
import CookiePolicy from '@/src/components/ui/Policy';
import { Toaster } from '@repo/ui/toaster';

import type { Metadata } from 'next';
import { viewport, generateMetadata as generateMetadataHelper } from '../lib/metadata';
import { generateOrganizationSchema } from '../lib/schema/organization';
import { SITE_TITLE, BASE_URL, ORG_LOGO_URL, ORG_SOCIAL_PROFILES } from '../lib/constants';

export { viewport };

// Site-wide metadata that all pages inherit
export const metadata: Metadata = await generateMetadataHelper({
  // No pageTitle here - just use the default SITE_TITLE
  // No path here - this is site-wide
  path: '/',
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Critical CSS inlined directly for production compatibility
const criticalCSS = `
  /* Essential design tokens for critical styles */
  :root {
    --font-sans: var(--font-raleway), sans-serif;
    --radius: 0.5rem;
    
    /* Essential colors for above-the-fold */
    --color-background: #ffffff;
    --color-foreground: #3a3a3a;
    --color-primary: #5a9975;
    --color-border: #e6e6e6;
    --color-muted-foreground: #737373;
  }

  /* Base reset and font loading */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--color-foreground);
    background-color: var(--color-background);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Prevent layout shift */
  html {
    scroll-behavior: smooth;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Ensure text remains visible during webfont load */
  @font-face {
    font-family: 'Raleway';
    font-display: swap;
  }
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await draftMode();

  const cookieStore = await cookies();
  const cookieConsent = cookieStore.get(CONSENT_COOKIE_NAME);
  const hasConsentedToAnalytics = cookieConsent?.value === 'accepted';

  // Generate organization schema for all pages
  const organizationSchema = generateOrganizationSchema({
    name: SITE_TITLE,
    url: BASE_URL,
    logoUrl: ORG_LOGO_URL,
    sameAs: ORG_SOCIAL_PROFILES,
  });

  return (
    <html lang="en" className={fontClassNames} suppressHydrationWarning>
      <head>
        {/* Inline critical CSS for immediate rendering */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        {/* Organization schema present on all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      {/* Only load Google Tag Manager if user consented */}
      {hasConsentedToAnalytics && <GoogleTagManager gtmId={GTM_ID || ''} />}
      <body className="flex flex-col min-h-screen">
        <Banner />
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
        <CookiePolicy />
        <Toaster />
        {/* Only load Analytics if user consented */}
        {hasConsentedToAnalytics && <Analytics />}
      </body>
    </html>
  );
}
