import { render, screen } from '@testing-library/react';
import { Footer } from '.';

vi.mock('#components/Navigation');
vi.mock('#components/SocialLinks');

describe('Component: Footer', () => {
  test('Should renders home page link with content \'rodolfo mayora pereda\'', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /^rodolfo mayora pereda$/i });
    expect(link).toBeInTheDocument();
  });

  test('Should renders current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const copyrightText = screen.getByText(/©/i);
    expect(copyrightText).toHaveTextContent(`© ${currentYear}`);
  });
  
});