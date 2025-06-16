# MailerLite Newsletter Integration Setup

This document provides steps to set up the MailerLite newsletter integration for the Carinya Parc website.

## Prerequisites

1. A MailerLite account (you can create one at [mailerlite.com](https://www.mailerlite.com/))
2. Admin access to your MailerLite account

## Getting Your API Key

1. Log in to your MailerLite account
2. Navigate to **Integrations** > **API** in the left sidebar
3. Click on **Generate new token**
4. Enter a name for your token (e.g., "Carinya Parc Website")
5. Copy the generated API key

## Setting Up Environment Variables

1. Create a `.env.local` file in the root directory of the website project if it doesn't exist already
2. Add the following line to the file:
   ```
   MAILERLITE_API_KEY=your_api_key_here
   ```
   Replace `your_api_key_here` with the API key you copied from MailerLite

3. Restart your development server if it's running

## Testing the Integration

1. Run the development server with `npm run dev` or `pnpm dev`
2. Navigate to a page with the newsletter component
3. Enter an email address and click "Subscribe"
4. Check the browser console for any error messages
5. Verify that the email was added to your MailerLite subscribers list

## Troubleshooting

If you encounter issues:

1. Check that the API key is correctly set in the `.env.local` file
2. Make sure the API key has the necessary permissions in MailerLite
3. Check the browser console and server logs for error messages
4. Verify that the API endpoint URL is correct in `/src/app/api/subscribe/route.ts`

## Additional Configuration

The current implementation adds subscribers to the default subscriber group. If you want to add subscribers to a specific group:

1. Get the group ID from MailerLite (can be found in the URL when viewing a group)
2. Update the `groups` field in the API request in `/src/app/api/subscribe/route.ts` with your group ID

Example:
```ts
body: JSON.stringify({
  email,
  groups: ['12345678'], // Replace with your actual group ID
  status: 'active',
  resubscribe: true,
}),
``` 