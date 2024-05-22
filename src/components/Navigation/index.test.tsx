import { render, screen } from '@testing-library/react';
import { Navigation } from '.';

vi.mock('#hooks/useLocaleDictionary', () => ({
  useLocaleDictionary: () => ({
    t: (key) => key, // this is a trick to test locale integrations
  }),
}));

describe('Component: Navigation', () => {
  test('Should renders all required links', () => {
    render(<Navigation />);
    const links = screen.getAllByRole('link');

    // expect(links).toHaveLength(3);
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/portfolio');
    // expect(links[2]).toHaveAttribute('href', '/profile');
  });
});