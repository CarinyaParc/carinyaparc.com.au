import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButton,
  HeroLocation,
  HeroActions,
  HeroLink,
} from '../../../src/components/Hero';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Hero Component', () => {
  it('renders the hero section with heading and image', () => {
    render(
      <Hero>
        <HeroContent>
          <HeroTitle>Welcome to Carinya Parc</HeroTitle>
          <HeroText>Discover our sustainable farming practices</HeroText>
        </HeroContent>
      </Hero>,
    );

    // Check if the hero renders with title and text
    expect(screen.getByText('Welcome to Carinya Parc')).toBeInTheDocument();
    expect(screen.getByText('Discover our sustainable farming practices')).toBeInTheDocument();
  });

  it('displays compelling headline text', () => {
    render(
      <Hero>
        <HeroContent>
          <HeroTitle>Regenerative Agriculture in Action</HeroTitle>
        </HeroContent>
      </Hero>,
    );

    // Check if the headline is rendered with appropriate styling
    const headline = screen.getByText('Regenerative Agriculture in Action');
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe('H1');
    expect(headline).toHaveClass('text-white');
  });

  it('includes a call-to-action button or link', () => {
    render(
      <Hero>
        <HeroContent>
          <HeroActions>
            <HeroButton href="/about">Learn More</HeroButton>
            <HeroLink href="/blog">Read Our Blog</HeroLink>
          </HeroActions>
        </HeroContent>
      </Hero>,
    );

    // Check for CTA button and link
    const button = screen.getByText('Learn More');
    const link = screen.getByText(/Read Our Blog/);

    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/about');

    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/blog');
  });

  it('has proper location display', () => {
    render(
      <Hero>
        <HeroContent>
          <HeroLocation>Carinya Parc, New South Wales</HeroLocation>
        </HeroContent>
      </Hero>,
    );

    // Check for location text
    expect(screen.getByText('Carinya Parc, New South Wales')).toBeInTheDocument();
  });

  it('contains descriptive subheading or supporting text', () => {
    render(
      <Hero>
        <HeroContent>
          <HeroTitle>Main Title</HeroTitle>
          <HeroText>This is some detailed supporting text that explains our mission.</HeroText>
        </HeroContent>
      </Hero>,
    );

    // Check if supporting text is rendered
    const supportingText = screen.getByText(
      'This is some detailed supporting text that explains our mission.',
    );
    expect(supportingText).toBeInTheDocument();
    expect(supportingText).toHaveClass('text-gray-200');
  });
});
