import { AppProps } from 'next/app';
import '../styles/styles.global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}