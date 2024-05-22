import { render, screen } from '@testing-library/react';
import { ButtonLink } from '.';

describe('Component: ButtonLink', () => {
  test('Should renders an internal navigation link when recieve only a pathname as \'href\'', () => {
    render(<ButtonLink href="/internal" >Test</ButtonLink>);
    const link = screen.getByRole('link', { name: /^test$/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target'); // Not an external link
    expect(link).not.toHaveAttribute('rel');    // Not an external link
  });

  test('Should renders an external navigation link when recieve only a full URL as \'href\'', () => {
    render(<ButtonLink href="http://www.example.com">Test</ButtonLink>);
    const link = screen.getByRole('link', { name: /^test$/i });
    
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'external noopener noreferrer');
  });
  
});