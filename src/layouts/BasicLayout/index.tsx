import type { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from '#components/Header';
import { Footer } from '#components/Footer';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
  pageTitle: string,
}

export function BasicLayout ({ children, pageTitle }: Props) {
  const title = `${pageTitle} | Rodolfo Mayora Pereda | FrontEnd Developer`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portafolio de Rodolfo Mayora Pereda, FrontEnd Developer enfocado en ReactJS y tecnologías relacionadas, ingresa al portafolio si deseas saber más." />
      </Head>
      <Header currentPage={pageTitle} />
      <main className={styles.pageContent}>
        {children}
      </main>
      <Footer />
    </>
  );
}