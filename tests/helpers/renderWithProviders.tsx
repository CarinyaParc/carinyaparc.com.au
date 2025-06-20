import React from 'react';
import { render } from '@testing-library/react';

// Define a ThemeProvider mock component directly
const MockThemeProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Custom render function that includes providers needed across the app
export function renderWithProviders(
  ui: React.ReactElement,
  { ...renderOptions } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <MockThemeProvider>
        {children}
      </MockThemeProvider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react';
