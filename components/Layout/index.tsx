import React, { FC } from 'react';
import LayoutProps from './type';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle}{' '}| Rodolfo Mayora Pereda</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {/* <Header /> */}
    {children}
    <Footer />
  </>
)

export default Layout;