import { withSentryConfig } from '@sentry/nextjs';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  trailingSlash: true,
  transpilePackages: ['@repo/ui'],

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization settings
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  headers: async () => {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Script sources - removed unsafe-inline and unsafe-eval
              "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com https://connect.facebook.net https://vercel.live",
              // Style sources - keep unsafe-inline for critical CSS (less dangerous than in script-src)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
              // Image sources
              "img-src 'self' data: blob: https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com https://tagmanager.google.com https://vercel.live",
              // Font sources
              "font-src 'self' https://fonts.gstatic.com",
              // Connection sources
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://tagmanager.google.com https://vercel.live wss://ws.pusher.com https://sockjs.pusher.com https://vitals.vercel-insights.com",
              // Worker sources - this fixes the blob worker error
              "worker-src 'self' blob: https://www.googletagmanager.com https://vercel.live",
              // Frame sources
              "frame-src 'self' https://www.googletagmanager.com https://vercel.live",
              // Object sources
              "object-src 'none'",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

// Configure MDX options
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Optionally provide remark and rehype plugins here
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
const mdxConfig = withMDX(nextConfig);

// Only apply Sentry wrapper in production
const finalConfig =
  process.env.NODE_ENV === 'production'
    ? withSentryConfig(mdxConfig, {
        org: 'carinya-parc-pty-ltd',
        project: 'javascript-nextjs',
        silent: !process.env.CI,
        widenClientFileUpload: true,
        tunnelRoute: '/monitoring',
        disableLogger: true,
        automaticVercelMonitors: true,
      })
    : mdxConfig;

export default finalConfig;
