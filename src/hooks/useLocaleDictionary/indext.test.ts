import { renderHook } from '@testing-library/react';
import { useLocaleDictionary } from '.';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

import { useRouter } from 'next/router';

describe('Hook: useLocaleDictionary', () => {
  test('Should returns default dictionarlyfor en locale', () => {
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({
      locale: 'en-US', // Default locale
      pathname: '/test-path',
    });

    const { result } = renderHook(useLocaleDictionary);
    const { baseLocale } = result.current;

    expect(baseLocale).toBe('en');
  });
});