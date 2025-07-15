import '../styles/index.css';

import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { draftMode } from 'next/headers';
import { cookies } from 'next/headers';
import { fontClassNames } from '../lib/font';
import { CONSENT_COOKIE_NAME } from '@/src/lib/constants';
import { getCriticalCSS } from '@/src/lib/get-critical-css';

import { navigation } from './navigation';
import Banner from '@/src/components/ui/Banner';
import Header from '@/src/components/layouts/Header';
import Newsletter from '@/src/components/ui/Newsletter';
import Footer from '@/src/components/layouts/Footer';
import CookiePolicy from '@/src/components/ui/Policy';
import { Toaster } from '@repo/ui/toaster';

import { generateMetadata, viewport } from '../lib/generateMetadata';

export { generateMetadata, viewport };

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await draftMode();

  const cookieStore = await cookies();
  const cookieConsent = cookieStore.get(CONSENT_COOKIE_NAME);
  const hasConsentedToAnalytics = cookieConsent?.value === 'accepted';

  // Get critical CSS for inlining
  const criticalCSS = getCriticalCSS();

  return (
    <html lang="en" className={fontClassNames} suppressHydrationWarning>
      <head>
        {/* Inline critical CSS for immediate rendering */}
        {criticalCSS && <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />}
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
