import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '../helpers/test-utils';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// Mock the next/router module
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: '/',
  }),
  usePathname: () => '/',
  useSearchParams: () => ({ get: vi.fn() }),
}));

// Mock next/mdx-remote for MDX content
vi.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock Image component
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

// Set up MSW server
const server = setupServer(
  // Add handlers for any API calls your components make during render
  http.get('/api/posts', () => {
    return HttpResponse.json({ posts: [] });
  }),
  http.get('/api/recipes', () => {
    return HttpResponse.json({ recipes: [] });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Import pages - In a real scenario, you would import your actual page components
// For this example, we'll create mock components
const HomePage = () => <div>Home Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;
const BlogPage = () => <div>Blog Page Content</div>;

describe('Smoke Tests - Critical Pages', () => {
  it('should render HomePage without crashing', () => {
    // Act & Assert
    expect(() => render(<HomePage />)).not.toThrow();
  });

  it('should render AboutPage without crashing', () => {
    // Act & Assert
    expect(() => render(<AboutPage />)).not.toThrow();
  });

  it('should render BlogPage without crashing', () => {
    // Act & Assert
    expect(() => render(<BlogPage />)).not.toThrow();
  });
});
