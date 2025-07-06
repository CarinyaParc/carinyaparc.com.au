import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Custom renderer that wraps components with necessary providers
 */
export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // Wrap component with any necessary providers here
      // For example, if using contexts or theme providers:
      // wrapper: ({ children }) => (
      //   <ThemeProvider>
      //     <OtherProvider>{children}</OtherProvider>
      //   </ThemeProvider>
      // ),
      ...options,
    }),
  };
}

// Re-export everything from testing-library
export * from '@testing-library/react';
