import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../helpers/renderWithProviders';
import Header from '../../../src/components/Header';

// Mock Next.js Link and Image components
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: any) => {
    return <img alt={alt} {...props} />;
  },
}));

// Mock next/navigation hooks
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
}));

describe('Header Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders the header with logo and navigation', () => {
    renderWithProviders(<Header />);

    // Check if the logo is rendered
    const logoElement = screen.getByAltText(/carinya parc/i) || screen.getByRole('img');
    expect(logoElement).toBeInTheDocument();

    // Check if navigation links are present
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/regeneration/i)).toBeInTheDocument();
  });

  it('includes a theme toggle button', () => {
    renderWithProviders(<Header />);

    // Check for theme toggle button
    const themeButton =
      screen.getByRole('button', { name: /toggle theme/i }) ||
      screen.getByRole('button', { name: /theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  it('has a working mobile menu button', () => {
    renderWithProviders(<Header />);

    // Find mobile menu button (could be hamburger icon)
    const mobileMenuButton =
      screen.getByRole('button', { name: /menu/i }) ||
      screen.getByRole('button', { name: /open/i });
    expect(mobileMenuButton).toBeInTheDocument();

    // Click the menu button to open mobile menu
    fireEvent.click(mobileMenuButton);

    // Check if mobile menu appears
    // This will depend on implementation, but likely shows same navigation items
    expect(screen.getAllByText(/about/i)[0]).toBeVisible();
    expect(screen.getAllByText(/blog/i)[0]).toBeVisible();
  });

  it('correctly highlights the current page in navigation', () => {
    // Mock the pathname to be /about
    vi.mocked(require('next/navigation').usePathname).mockReturnValue('/about');

    renderWithProviders(<Header />);

    // Find the "About" link and check if it has active styling
    const aboutLink = screen.getByText(/about/i).closest('a');
    expect(aboutLink).toHaveClass('active'); // Adjust class name based on actual implementation
  });

  it('closes mobile menu when a navigation item is clicked', () => {
    renderWithProviders(<Header />);

    // Open mobile menu
    const mobileMenuButton =
      screen.getByRole('button', { name: /menu/i }) ||
      screen.getByRole('button', { name: /open/i });
    fireEvent.click(mobileMenuButton);

    // Click a navigation item
    fireEvent.click(screen.getByText(/about/i));

    // Verify mobile menu closes (implementation-specific)
    // This could check for a class change, visibility, or the close button
    const closeButton = screen.queryByRole('button', { name: /close/i });
    expect(closeButton).not.toBeInTheDocument();
  });
});
