import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';
import { SplashScreen } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <SplashScreen />
    </>
  );
}