import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../helpers/renderWithProviders';
import Newsletter from '../../../src/components/Newsletter';
import { server } from '../../mocks/server';
import { http, delay, HttpResponse } from 'msw';
import newsletterFixture from '../../fixtures/newsletter.json';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, ...rest }: any) => {
    return <a {...rest}>{children}</a>;
  },
}));

describe('Newsletter Component', () => {
  // Reset all mocks before each test for isolation
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the newsletter component correctly', () => {
    renderWithProviders(<Newsletter />);

    // Check for heading
    expect(
      screen.getByRole('heading', { name: /subscribe to our newsletter/i }),
    ).toBeInTheDocument();

    // Check for input field
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument();

    // Check for button
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();

    // Check for privacy policy link
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
  });

  it('allows entering an email address', async () => {
    renderWithProviders(<Newsletter />);

    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    const testEmail = newsletterFixture.validEmail;

    // Type email in the input
    await userEvent.type(emailInput, testEmail);

    // Check if the input has the correct value
    expect(emailInput).toHaveValue(testEmail);
  });

  it('shows loading state when submitting', async () => {
    // Setup mock to delay response
    server.use(
      http.post('/api/subscribe', async () => {
        await delay(100); // Small delay to ensure loading state is visible
        return HttpResponse.json({ success: true }, { status: 200 });
      }),
    );

    renderWithProviders(<Newsletter />);

    // Enter email
    await userEvent.type(
      screen.getByRole('textbox', { name: /email address/i }),
      newsletterFixture.validEmail,
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    // Check loading state
    expect(screen.getByRole('button', { name: /subscribing/i })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows success message after successful subscription', async () => {
    renderWithProviders(<Newsletter />);

    // Enter email
    await userEvent.type(
      screen.getByRole('textbox', { name: /email address/i }),
      newsletterFixture.validEmail,
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
    });

    // Check if the input was reset
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveValue('');
  });

  it('shows error message when subscription fails', async () => {
    // Override default handler to simulate an error
    server.use(
      http.post('/api/subscribe', () => {
        return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
      }),
    );

    renderWithProviders(<Newsletter />);

    // Enter email
    await userEvent.type(
      screen.getByRole('textbox', { name: /email address/i }),
      newsletterFixture.validEmail,
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/internal server error/i)).toBeInTheDocument();
    });
  });

  it('handles network errors gracefully', async () => {
    // Override default handler to simulate a network error
    server.use(
      http.post('/api/subscribe', () => {
        return HttpResponse.error();
      }),
    );

    renderWithProviders(<Newsletter />);

    // Enter email
    await userEvent.type(
      screen.getByRole('textbox', { name: /email address/i }),
      newsletterFixture.validEmail,
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});
