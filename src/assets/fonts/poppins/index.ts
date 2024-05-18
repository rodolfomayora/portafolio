import localFont from 'next/font/local';
// import { Poppins } from 'next/font/google';

// const poppins = Poppins({
  //   variable: '--font-poppins',
//   subsets: ['latin'],
//   style: ['normal'],
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   display: 'swap',
// });

export const poppins = localFont({
  variable: '--font-poppins',
  src: [
    {
      path: './poppins-v21-latin-ext-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './poppins-v21-latin-ext-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});