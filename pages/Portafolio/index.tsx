import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';

const Portafolio: FC = () => (
  <Layout pageTitle="Portafolio">
    <main className={style.Portafolio}>
      <Container>
        <h1>Portafolio</h1>
      </Container>
    </main>
  </Layout>
)

export default Portafolio;