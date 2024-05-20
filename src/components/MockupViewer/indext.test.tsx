import { render, screen } from '@testing-library/react';
import { MockupViewer } from '.';

describe('Component: MockupViewer', () => {
  test('Should renders image with required attributes', () => {
    render(
      <MockupViewer
        mockupFileName="project-title"
        alt="Project Title"
      />
    );

    const image = screen.getByRole('img', { name: /^project title mockup$/i });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('width');
    expect(image).toHaveAttribute('height');
    expect(image).toHaveAttribute('loading');
    expect(image).toHaveAttribute('decoding');
  });
});