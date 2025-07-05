import '../styles/globals.css';

import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { draftMode } from 'next/headers';
import { fontClassNames } from '../lib/font';

import { navigation } from './navigation';
import Banner from '@/src/components/Banner';
import Header from '@/src/components/Header';
import Newsletter from '@/src/components/Newsletter';
import Footer from '@/src/components/Footer';
import CookiePolicy from '@/src/components/Policy';

import { generateMetadata, viewport } from '../lib/generateMetadata';

export { generateMetadata, viewport };

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await draftMode();

  return (
    <html lang="en" className={fontClassNames} suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID || ''} />
      <body className="flex flex-col min-h-screen">
        <Banner />
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
        <CookiePolicy />
        <Analytics />
      </body>
    </html>
  );
}
