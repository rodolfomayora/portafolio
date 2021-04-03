import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';

const Home: FC = () => (
  <Layout pageTitle="Inicio">
    <main className={style.Home}>
      <section>
        <Container>
          <h1>RODOLFO<br /> MAYORA<br /> PEREDA</h1>
          <h2>FRONTEND DEVELOPER</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>¿Qué utilizo?</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Proyectos Personales</h2>

          <article>
            imagen
            <h3>Blogr Landing Page</h3>
            <a 
              href="https://github.com/rodolfomayora/blogr-landing-page.git"
              target="_blank"
              rel="external noopener noreferrer"
            >
              Repositorio
            </a>
            <a 
              href="https://blogr-landing-page-orcin.vercel.app"
              target="_blank"
              rel="external noopener noreferrer"
            >
              Ver Online
            </a>
          </article>

          <article>
            <h3>Easybank Landing Page</h3>
            <a
              href="https://github.com/rodolfomayora/easybank-landing-page.git"
              target="_blank"  
              rel="external noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              href="https://rodolfomayora.github.io/easybank-landing-page"
              target="_blank"  
              rel="external noopener noreferrer"
            >
              Ver Online
            </a>
          </article>

          <article>
            <h3>Insure Landing Page</h3>
            <a
              href="https://github.com/rodolfomayora/insure-landing-page.git"
              target="_blank"  
              rel="external noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              href="https://rodolfomayora.github.io/insure-landing-page"
              target="_blank"  
              rel="external noopener noreferrer"
            >
              Ver Online
            </a>
          </article>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Intereses</h2>
        </Container>
      </section>
    </main>
  </Layout>
)

export default Home;