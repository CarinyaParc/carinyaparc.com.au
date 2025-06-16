import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse email from request
    const { email } = await req.json();
    console.log('Attempting to subscribe email:', email);

    // Check for API key
    if (!process.env.MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { error: 'Newsletter service not configured. Please add MAILERLITE_API_KEY to .env.local' },
        { status: 500 }
      );
    }

    // Per MailerLite docs: https://developers.mailerlite.com/docs/#authentication
    // Base URL is https://connect.mailerlite.com/api
    // We need to use Authorization: Bearer XXX header format
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          // Remove the groups parameter if you don't have a group ID
          // If you know your group ID, use: groups: [12345]
        }),
      });

      // Get response data
      let data;
      try {
        data = await response.json();
      } catch (e) {
        console.error('Failed to parse response as JSON:', e);
        data = { message: 'Failed to parse response' };
      }

      console.log(`MailerLite API response status: ${response.status}`);
      console.log('MailerLite API response data:', JSON.stringify(data));

      // Handle different response codes
      if (!response.ok) {
        let errorMessage = 'Unknown error';
        if (data && data.message) {
          errorMessage = data.message;
        } else if (response.status === 401) {
          errorMessage = 'Invalid API key';
        } else if (response.status === 429) {
          errorMessage = 'Rate limit exceeded';
        } else if (response.status === 422) {
          errorMessage = data.errors ? JSON.stringify(data.errors) : 'Validation error';
        }
        console.error('MailerLite API error:', errorMessage);
        return NextResponse.json(
          { error: `Subscription failed: ${errorMessage}` },
          { status: response.status }
        );
      }

      console.log('Successfully subscribed email:', email);
      return NextResponse.json({ success: true });
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return NextResponse.json({ error: 'Network error. Please try again later.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Request parsing error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 400 });
  }
}
