import { AppProps } from 'next/app';
import { SplashScreen } from '#components/SplashScreen';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV !== 'development' && <SplashScreen />}
      <Component {...pageProps} />
    </>
  );
}