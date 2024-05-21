import { render, screen } from '@testing-library/react';
import { TechnologyBlock } from '.';

describe('Component: TechnologyBlock', () => {
  test('Should renders image with required attributes', () => {
    render(
      <TechnologyBlock
        name="React"
        src="/logo.png"
        loading="eager"
        decoding="auto"
      />
    );

    const image = screen.getByRole('img', { name: /^react icon$/i });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('width');
    expect(image).toHaveAttribute('height');
    expect(image).toHaveAttribute('loading');
    expect(image).toHaveAttribute('decoding');
  });

  test('Should renders technology name', () => {
    render(
      <TechnologyBlock
        name="React"
        src="/logo.png"
        loading="eager"
        decoding="auto"
      />
    );

    const element = screen.getByText(/^react$/i);

    expect(element).toBeInTheDocument();
  });
});