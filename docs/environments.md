# Environment Configuration Guide

This document outlines the proper environment configuration for development, staging, and production environments for the Carinya Parc website.

## Environment Files Structure

Next.js supports multiple environment files that are loaded based on the current environment:

- `.env`: Default file, always loaded
- `.env.local`: Local overrides, loaded in all environments except test
- `.env.development`: Development environment settings
- `.env.staging`: Staging environment settings
- `.env.production`: Production environment settings
- `.env.example`: Example file showing required variables (not loaded)

## Environment Variables

### Required Variables

```
# API Keys
MAILERLITE_API_KEY=your_api_key_here

# Environment-specific configuration
NODE_ENV=development # or staging, production
NEXT_PUBLIC_SITE_URL=http://localhost:3000 # Update based on environment
```

### Optional Variables

```
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Debug flags
NEXT_PUBLIC_DEBUG=true # Only for development
```

## Environment-Specific Configurations

### Development Environment (`.env.development`)

```
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_DEBUG=true

# Use testing API keys here
MAILERLITE_API_KEY=your_development_api_key
```

### Staging Environment (`.env.staging`)

```
NODE_ENV=staging
NEXT_PUBLIC_SITE_URL=https://staging.carinyaparc.com.au
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_DEBUG=false

# Use testing or staging API keys here
MAILERLITE_API_KEY=your_staging_api_key
```

### Production Environment (`.env.production`)

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://carinyaparc.com.au
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_DEBUG=false

# Use production API keys only
MAILERLITE_API_KEY=your_production_api_key
```

## Implementation Notes

1. **Never** commit `.env` files containing secrets to version control. They are already included in `.gitignore`.
2. For local development, use `.env.local` to override any values in `.env.development`.
3. For CI/CD pipelines, set environment variables directly in your deployment platform (Vercel, Netlify, etc.).

## Using Environment Variables in Code

Next.js automatically makes variables prefixed with `NEXT_PUBLIC_` available in browser code:

```javascript
// Server-side only (not exposed to the browser)
const apiKey = process.env.MAILERLITE_API_KEY;

// Available on both server and client-side
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Setting Up Environment Variables for CI/CD

### GitHub Actions

For GitHub Actions, add your secrets in the repository settings and reference them in your workflow files:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # ... other steps
      - name: Build
        env:
          MAILERLITE_API_KEY: ${{ secrets.MAILERLITE_API_KEY_PROD }}
          NEXT_PUBLIC_SITE_URL: https://carinyaparc.com.au
        run: npm run build
```

### Vercel/Netlify

Configure environment variables in your deployment platform's dashboard:

1. Go to your project settings
2. Find the Environment Variables section
3. Add each variable for each environment (production, preview/staging)

## Testing Environment Configuration

To verify your environment is correctly configured:

1. Check loaded environment variables during build/runtime:

```javascript
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('SITE URL:', process.env.NEXT_PUBLIC_SITE_URL);
```

2. In development, add this to your `next.config.js` to see which environment variables are loaded:

```javascript
const nextConfig = {
  onDemandEntries: {
    // ...other config
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log('Environment Variables:', process.env);
    }
    return config;
  },
};
``` 