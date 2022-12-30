import { AppProps } from 'next/app';
import '../styles/styles.global.scss';

import GlobalStyles from '../styles/GlobalStyles';
import { SplashScreen } from '../components';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SplashScreen />
      <Component {...pageProps} />
    </>
  );
}