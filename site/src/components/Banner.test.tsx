import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Banner>Test Banner</Banner>);
    expect(container).toBeTruthy();
  });
});
