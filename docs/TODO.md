# Carinya Parc Website - TODO List

## Content & Navigation (High Priority)

- [ ] Replace remaining placeholder content with final copy
- [ ] Enable hidden navigation items (currently marked as visible: false)
- [ ] Create missing pages for navigation items:
  - [ ] Experience the Farm page
  - [ ] Learn About Our Produce page
  - [ ] Cook From The Hearth page
  - [ ] Join Our Community page
- [ ] Finalize all blog post content and ensure consistency
- [ ] Add proper internal linking strategy
- [ ] Implement breadcrumb schema for all pages

---

## Critical Architecture & Performance Improvements (High Priority)

- [ ] Implement React 19 Server Components optimization patterns (use/parallel data fetching)
- [x] Add next/font integration for optimal font loading performance
- [ ] Implement dynamic OG image generation for blog posts and pages
- [ ] Add React Error Boundaries for granular error handling in components
- [ ] Enable TypeScript strict mode and resolve all type safety issues
- [ ] Implement proper API validation middleware using Zod schemas consistently
- [ ] Add response streaming for improved perceived performance
- [ ] Implement React Suspense boundaries with proper loading states

## Component Architecture & Design System (High Priority)

- [ ] Create comprehensive design tokens system in Tailwind v4 format
- [ ] Implement compound component patterns for complex UI components
- [ ] Add component-level error boundaries with fallback UI
- [ ] Document all component APIs with TypeScript interfaces
- [ ] Create accessibility testing suite for all interactive components
- [ ] Implement focus trap management for modals and dialogs
- [ ] Add touch gesture support for mobile interactions

## Testing & Quality Assurance (High Priority)

- [ ] Implement Playwright E2E tests for critical user journeys
- [ ] Set up Chromatic visual regression testing integration
- [ ] Add performance testing with Lighthouse CI budgets
- [ ] Implement API contract testing for all endpoints
- [ ] Add mutation testing to ensure test quality
- [ ] Create smoke tests for production deployments
- [ ] Implement automated security scanning with OWASP ZAP

## Monitoring & Observability (Medium Priority)

- [ ] Implement structured logging with correlation IDs
- [ ] Add custom performance marks for critical rendering paths
- [ ] Set up real user monitoring (RUM) with Web Vitals tracking
- [ ] Create custom Sentry contexts for better error debugging
- [ ] Implement distributed tracing for API calls
- [ ] Add synthetic monitoring for critical user paths
- [ ] Create performance dashboard with key metrics

## Performance Optimizations (Medium Priority)

- [ ] Implement route-based code splitting with dynamic imports
- [ ] Add Redis caching layer for API responses
- [ ] Implement ISR (Incremental Static Regeneration) for blog posts
- [ ] Create responsive image generation pipeline with sharp
- [ ] Add edge caching strategy with stale-while-revalidate
- [ ] Implement partial hydration for static content
- [ ] Optimize bundle size with tree shaking analysis

## Advanced Security (Medium Priority)

- [ ] Implement Content Security Policy nonce for inline scripts
- [ ] Add CSRF protection for all form submissions
- [ ] Implement request signing for API endpoints
- [ ] Add bot detection beyond basic honeypot
- [ ] Implement session rotation on privilege changes
- [ ] Add API rate limiting with sliding window algorithm
- [ ] Create security.txt file for vulnerability disclosure

## SEO & Structured Data (Low Priority)

- [ ] Implement FAQ schema where appropriate
- [ ] Add WebSite schema with search action
- [ ] Implement Product schema for farm products
- [ ] Add Event schema for farm events
- [ ] Create JSON-LD schema validation tests
- [ ] Implement hreflang tags for future internationalization
- [ ] Add schema markup for videos when added

## Accessibility & WCAG Compliance (Low Priority)

- [ ] Add comprehensive ARIA labels and landmarks throughout the site
- [ ] Implement screen reader support for all interactive elements
- [ ] Add skip navigation links for keyboard users
- [ ] Ensure proper focus management for modals and forms
- [ ] Add keyboard navigation support for all interactive components
- [ ] Implement automated accessibility testing in CI pipeline
- [ ] Conduct manual accessibility audit with assistive technologies
- [ ] Test with screen readers (NVDA, JAWS, VoiceOver)
- [ ] Add accessibility documentation for content editors
- [ ] Ensure sufficient color contrast ratios across all content

## Developer Experience (Low Priority)

- [ ] Create comprehensive ADR (Architecture Decision Records)
- [ ] Add JSDocs for all utility functions and hooks
- [ ] Create development environment setup automation
- [ ] Implement git hooks for code quality checks
- [ ] Add VS Code workspace recommended extensions
- [ ] Create component scaffolding CLI tool
- [ ] Document deployment rollback procedures
- [ ] Add performance profiling documentation

## Advanced Features (Future Enhancements)

- [ ] Implement Progressive Web App (PWA) features
- [ ] Add social sharing functionality for blog posts
- [ ] Implement search functionality for blog content
- [ ] Add RSS feed generation for blog posts
- [ ] Create newsletter archive pages
- [ ] Add print stylesheet optimization
- [ ] Implement dark mode support
- [ ] Add offline support with service workers
- [ ] Implement web push notifications
- [ ] Add WebAuthn for passwordless authentication

## Infrastructure & DevOps (Future Enhancements)

- [ ] Rebase branches (`dev`, `staging`) to `main`
- [ ] Configure promotion from dev to staging (automated workflow)
- [ ] Configure promotion from staging to production environment (manual approval)
- [ ] Set up production deployment workflow
- [ ] Implement blue-green deployment strategy
- [ ] Add canary deployment capabilities
- [ ] Configure multi-region deployment
- [ ] Implement database connection pooling
- [ ] Add horizontal scaling automation
- [ ] Configure DDoS protection
- [ ] Implement automated backup testing
- [ ] Add chaos engineering tests
- [ ] Configure cost optimization alerts

## Contact Form

- [ ] Implement contact form with validation and submission
- [ ] Create `/contact` page with ContactForm component
- [ ] Create `/api/contact` endpoint for form submissions
- [ ] Add contact form tests (unit + integration)
- [ ] Configure email delivery service for contact form submissions

---

## DONE

### Infrastructure & Deployment

- [x] Set up CI/CD pipeline (GitHub Actions)
- [x] Document deployment process
- [x] Configure automated linting and formatting checks
- [x] Set up dependency vulnerability scanning
- [x] Implement automated testing in CI pipeline

### SEO & Structured Data

- [x] Implement JSON-LD structured data for all types
- [x] Add rich snippets for recipes
- [x] Implement schemas across the site pages
- [x] Add blog post schema markup with proper article structure
- [x] Created flexible SchemaMarkup component for reusability
- [x] Created dynamic Breadcrumb component with visual navigation
- [x] Added unit tests for all schema generators
- [x] Added smoke tests for SchemaMarkup and Breadcrumb components
- [x] Review and enhance metadata across all pages
- [x] Create dynamically generated sitemap.xml
- [x] Add Open Graph and Twitter card meta tags
- [x] Create robots.txt file
- [x] Implement canonical URLs
- [x] Configure proper meta descriptions and titles
- [x] Register site with Google Search Console and Bing Webmaster Tools

### Performance & Core Web Vitals

- [x] Add critical CSS inlining for above-the-fold content
- [x] Audit and optimize image assets (compression, formats, lazy loading)
- [x] Implement code splitting for JavaScript bundles
- [x] Create image optimization scripts for multiple formats
- [x] Configure Next.js Image component with proper optimization
- [x] Replace placeholder images with final assets

### Newsletter & Subscription System

- [x] Complete Newsletter subscription functionality (core feature)
- [x] Implement MailerLite API integration with robust error handling
- [x] Add comprehensive form validation with Zod schemas
- [x] Implement rate limiting for subscription API endpoints
- [x] Add honeypot and spam protection for newsletter forms
- [x] Test newsletter subscription with real emails
- [x] Add loading states and error handling for subscription forms

### Security & Compliance

- [x] Implement Content Security Policy (CSP)
- [x] Add secure HTTP headers (all security headers)
- [x] Implement cookie consent mechanism
- [x] Review and finalize Privacy Policy
- [x] Review and finalize Terms of Service
- [x] Sanitize user inputs in API endpoints
- [x] Conduct comprehensive security vulnerability scan

### Testing Infrastructure

- [x] Implement unit testing framework (Vitest)
- [x] Add component tests for critical UI components
- [x] Add integration tests for key user flows
- [x] Perform cross-browser testing setup
- [x] Create comprehensive test structure and documentation
- [x] Set up MSW for API mocking in tests
- [x] Configure test coverage reporting

### Error Tracking & Monitoring

- [x] Complete Google Tag Manager setup
- [x] Implement error tracking (Sentry)
- [x] Configure Sentry for client, server, and edge environments
- [x] Add global error boundaries
- [x] Set up analytics with Vercel Analytics

### UI/UX & Navigation

- [x] Complete mobile navigation implementation
- [x] Create responsive header with mobile menu
- [x] Implement smooth animations with Framer Motion
- [x] Create comprehensive component library
- [x] Add toast notification system

### Content Management

- [x] Set up MDX for blog posts and legal pages
- [x] Create custom MDX components for rich content
- [x] Implement blog post routing and metadata parsing
- [x] Create recipe content structure

### Development Environment

- [x] Create comprehensive README with setup instructions
- [x] Document architecture decisions
- [x] Create API documentation for subscription endpoint
- [x] Set up proper environment configuration
- [x] Configure monorepo structure with shared packages
- [x] Run linting on all code files
- [x] Enforce code style consistency
- [x] Remove console.log statements
- [x] Address all TypeScript errors
- [x] Implement automated code formatting
