import { useRouter } from 'next/router';
import { en } from '#locales/en';
import { es } from '#locales/es';

type useLocaleDictionary = {
  t: typeof en,
  baseLocale: string,
  pathname: string,
}

export function useLocaleDictionary (): useLocaleDictionary {
  const { locale, pathname } = useRouter();
  const [baseLocale] = locale.split('-');
  const isDefaultLocale = baseLocale === 'en';
  const t = isDefaultLocale ? en : es;
  return {
    t,
    baseLocale,
    pathname,
  };
}