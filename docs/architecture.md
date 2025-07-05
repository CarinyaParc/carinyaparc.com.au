# Technology Architecture

A production-ready, enterprise-grade Next.js application with comprehensive tooling for content management, testing, and deployment.

## **Core Framework & Runtime**

- Next.js App Router v15 with TypeScript
- React v19 with React DOM v19
- Node.js v22+ engine requirement

## **Styling & Design System**

- Tailwind CSS v4 with custom design tokens (eucalyptus, harvest, charcoal color palette)
- @tailwindcss/typography for rich content styling
- tailwindcss-animate for micro-interactions
- Custom CSS variables for semantic color theming
- Raleway Google font integration

## **UI Component Architecture**

- Comprehensive UI Component Library built with Radix UI primitives + CVA
- Lucide React icons v0.525.0
- Framer Motion for advanced animations
- tailwind-merge + clsx for dynamic className composition

## **Content Management**

- MDX v3.1.0 (@mdx-js/react, @next/mdx) for static content authoring
- gray-matter for frontmatter parsing
- Custom content file system with automatic sitemap generation

## **Development & Tooling**

- **Monorepo**: pnpm workspace with Turbo v2.5.4 for build optimization
- **Linting**: ESLint v9.30.1 with custom shared configurations + Prettier v3.6.2
- **Testing**: Vitest v3.2.4 with @testing-library suite + Playwright v1.53.2 for E2E
- **Coverage**: Istanbul and V8 coverage reporting

## **Forms & Validation**

- React Hook Form v7.59.0 with @hookform/resolvers
- Zod v3.25.71 for schema validation
- Custom MailerLite newsletter integration API

## **Third-Party Integrations**

- Google Tag Manager (@next/third-parties)
- Vercel Analytics v1.5.0 + Speed Insights v1.2.0

## **Additional Features**

- Advanced carousels (embla-carousel-react)
- Charts (recharts v3.0.2)
- Date manipulation (date-fns v4.1.0)
- Security headers with CSP configuration
- Custom 404 handling with hero imagery

## **Build & Deployment**

- Turbopack for development builds
- Comprehensive CI/CD with GitHub Actions
- Vercel deployment optimized
- Auto-generated sitemaps and metadata

## **Package Management**

- **Workspace Structure**: Shared packages for eslint-config, typescript-config, and tailwind-config
- **Monorepo Tools**: Turbo for task orchestration with dependency caching
- **Package Manager**: pnpm v10.12.1 with lockfile management
