import React, { FC } from 'react';

import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import LayoutProps from './types';

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle}{' '}| Rodolfo Mayora Pereda | FrontEnd Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Portafolio de Rodolfo Mayora Pereda, FrontEnd Developer enfocado en ReactJS y tecnologías relacionadas, ingresa al portafolio si deseas saber más." />
    </Head>
    <Header currentPage={pageTitle} />
    {children}
    <Footer />
  </>
)

export default Layout;