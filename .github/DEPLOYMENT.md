# CarinyaParc Deployment Pipeline

This document outlines our automated deployment pipeline and branch strategy for the CarinyaParc website.

## Branch Strategy

We use a three-branch strategy:

- **`dev`**: Development branch where active work happens
- **`staging`**: Pre-production branch for testing and validation
- **`main`**: Production branch, deployed to live site

## Automated Workflow

### Dev → Staging (Automated)

When code is pushed to the `dev` branch:

1. CI runs to check:
   - Linting
   - Unit tests
   - E2E tests (where applicable)
   - Type checking
   - Build validation

2. If all checks pass, an automated workflow (`deploy-to-staging.yml`) will:
   - Check for merge conflicts with the staging branch
   - Merge the dev branch into staging using fast-forward merge
   - Push the changes to staging
   - Vercel will automatically deploy the staging branch

### Staging → Production (Manual with Approval)

When the staging branch is ready for production:

1. Trigger the "Promote to Production" workflow from the GitHub Actions tab
2. Enter "YES" in the confirmation field
3. The workflow will:
   - Verify all CI checks have passed
   - Check the staging deployment status
   - Require manual approval from authorized users
   - Merge staging into main using fast-forward merge
   - Create a release tag with timestamp
   - Vercel will automatically deploy the main branch

## Vercel Deployments

- **Preview Deployments**: Only created from the `staging` branch
- **Production Deployments**: Only deployed from the `main` branch
- **Dev Branch**: No deployments (to save resources)

## Manual Overrides

In exceptional circumstances, you can:

1. Use the "force_promotion" option in the dev→staging workflow
2. For production deployments, you must always use the workflow with proper approvals

## Rollbacks

To roll back:

1. Identify the last working commit/tag
2. Create a hotfix branch from that tag
3. Use the workflows to promote through staging to production
4. Alternatively, revert the problematic commit directly

## Environment Variables

Environment-specific variables are managed through:
- GitHub environment settings for each environment
- Vercel project environment variables 