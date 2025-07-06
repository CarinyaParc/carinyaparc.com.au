import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from 'test-utils';
import DateComponent from '../../../site/src/components/Date';

describe('Date Component', () => {
  it('renders the formatted date correctly', () => {
    // Arrange
    const testDate = '2025-05-20T10:00:00Z';

    // Act
    render(<DateComponent dateString={testDate} />);

    // Assert - Check that the date is formatted correctly
    // The format used in the component is 'LLLL d, yyyy' which would be "May 20, 2025"
    expect(screen.getByText(/May 20, 2025/)).toBeInTheDocument();
  });

  it('renders nothing when dateString is undefined', () => {
    // Arrange & Act
    const { container } = render(<DateComponent dateString={undefined} />);

    // Assert
    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when dateString is empty', () => {
    // Arrange & Act
    const { container } = render(<DateComponent dateString="" />);

    // Assert
    expect(container.firstChild).toBeNull();
  });

  it('includes the correct datetime attribute', () => {
    // Arrange
    const testDate = '2025-06-15';

    // Act
    render(<DateComponent dateString={testDate} />);

    // Assert
    const timeElement = screen.getByText(/June 15, 2025/);
    expect(timeElement.tagName.toLowerCase()).toBe('time');
    expect(timeElement).toHaveAttribute('datetime', testDate);
  });
});
