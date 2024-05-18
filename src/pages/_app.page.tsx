import { AppProps } from 'next/app';
import { poppins } from '#/assets/fonts/poppins';
// import { SplashScreen } from '#components/SplashScreen';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      {/* {process.env.NODE_ENV !== 'development' && <SplashScreen />} */}
      <Component {...pageProps} />
    </div>
  );
}