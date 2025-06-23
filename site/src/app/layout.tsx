import type { Metadata } from 'next';
import Script from 'next/script';

import '../styles/globals.css';
import { fontClassNames } from '../lib/font';
import { navigation } from './navigation';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import Acknowledgement from '../components/Acknowledgement';
import CookiePolicy from '../components/Policy';

export const metadata: Metadata = {
  title: 'Carinya Parc',
  description:
    'Carinya Parc is a regenerative farm located at The Branch NSW, focused on land restoration and sustainable agriculture.',
  keywords: ['regenerative farming', 'sustainable agriculture', 'Carinya Parc', 'Australia'],
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            ></iframe>
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
      </body>
    </html>
  );
}
