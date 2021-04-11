import { AppProps } from 'next/app';
import '../styles/styles.global.scss';
import { SplahScreen } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SplahScreen />
    </>
  );
}