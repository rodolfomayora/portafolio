import { render, screen } from '@testing-library/react';
import { TechnologyTag } from '.';

describe('Component: TechnologyTag', () => {
  test('Should renders children prop', () => {
    render(<TechnologyTag>Test</TechnologyTag>);
    const element = screen.getByText(/^test$/i);
    expect(element).toBeDefined();
  });
});