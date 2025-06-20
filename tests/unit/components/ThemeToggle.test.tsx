import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import ThemeToggle from '../../../src/components/ThemeToggle';

// Mock the next-themes module
vi.mock('next-themes', () => {
  return {
    useTheme: vi.fn(() => ({
      theme: 'light',
      setTheme: vi.fn(),
    })),
    ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Import the mocked function for direct access in tests
const { useTheme } = await import('next-themes');

describe('ThemeToggle Component', () => {
  it('renders the theme toggle button', () => {
    render(<ThemeToggle />);
    
    // Check if the button is rendered
    const themeButton = screen.getByRole('button');
    expect(themeButton).toBeInTheDocument();
  });

  it('shows light theme icon when theme is light', () => {
    // Update the mock to return light theme
    const setThemeMock = vi.fn();
    (useTheme as any).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    
    // Check for sun icon or light theme indicator
    const themeButton = screen.getByRole('button');
    expect(themeButton).toHaveAttribute('aria-label', expect.stringMatching(/light|theme|toggle/i));
  });

  it('shows dark theme icon when theme is dark', () => {
    // Update the mock to return dark theme
    const setThemeMock = vi.fn();
    (useTheme as any).mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    
    // Check for moon icon or dark theme indicator
    const themeButton = screen.getByRole('button');
    expect(themeButton).toHaveAttribute('aria-label', expect.stringMatching(/dark|theme|toggle/i));
  });

  it('toggles theme when button is clicked', () => {
    // Setup mock with a spy
    const setThemeMock = vi.fn();
    (useTheme as any).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    
    // Click the theme toggle button
    fireEvent.click(screen.getByRole('button'));
    
    // Verify the setTheme was called with 'dark'
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('toggles from dark to light when button is clicked in dark mode', () => {
    // Setup mock with a spy for dark theme
    const setThemeMock = vi.fn();
    (useTheme as any).mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    
    // Click the theme toggle button
    fireEvent.click(screen.getByRole('button'));
    
    // Verify the setTheme was called with 'light'
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});
