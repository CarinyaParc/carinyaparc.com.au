import '../styles/globals.css';

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { fontClassNames } from '../lib/font';
import { draftMode } from 'next/headers';
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/src/components/DraftModeToast";
import * as meta from "@/src/app/meta";
import Script from 'next/script';

import { navigation } from './navigation';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import Acknowledgement from '../components/Acknowledgement';
import CookiePolicy from '../components/Policy';

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || meta.title;
  const description = settings?.description || meta.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

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
        {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
        <Toaster />
        {isDraftMode && (
            <>
              <DraftModeToast />
              {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
              <VisualEditing />
            </>
          )}
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          <SanityLive onError={handleError} />
        <Banner />
        <Header navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
        <SubFooter />
        <Acknowledgement />
        <CookiePolicy />
        <SpeedInsights />
      </body>
    </html>
  );
}
