import '../styles/globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { draftMode } from 'next/headers';
import Script from 'next/script';
import { fontClassNames } from '../lib/font';

import { navigation } from './navigation';
import Banner from '@/src/components/Banner';
import Header from '@/src/components/Header';
import Newsletter from '@/src/components/Newsletter';
import Footer from '@/src/components/Footer';
import SubFooter from '@/src/components/SubFooter';
import Acknowledgement from '@/src/components/Acknowledgement';
import CookiePolicy from '@/src/components/Policy';

import { generateMetadata } from '../lib/generateMetadata';

export { generateMetadata };

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await draftMode();

  return (
    <html lang="en" className={fontClassNames} suppressHydrationWarning>
      {/* Google Tag Manager */}
      {process.env.NODE_ENV === 'production' && GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
      <body className="flex flex-col min-h-screen">
        {/* GTM No-JS fallback*/}
        {process.env.NODE_ENV === 'production' && GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Banner />
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
        <SubFooter />
        <Acknowledgement />
        <CookiePolicy />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
