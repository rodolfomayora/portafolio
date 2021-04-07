import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';

const Perfil: FC = () => (
  <Layout pageTitle="Perfil">
    <main className={style.Perfil}>
      <Container>
        <h1>Perfil</h1>
      </Container>
    </main>
  </Layout>
)

export default Perfil;