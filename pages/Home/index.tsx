import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';

const Home: FC = () => (
  <Layout pageTitle="Inicio">
    <main className={style.Home}>

      <section className={style.mainSection}>
        <Container>
          <h1 className={style.mainTitle}>RODOLFO<br /> MAYORA<br /> PEREDA</h1>
          <h2>FRONTEND DEVELOPER</h2>
        </Container>
      </section>

      <section className={style.sectionTechSkills}>
        <Container>
          <h2 className={style.subTitle}>¿Qué utilizo?</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Yarn</li>
          </ul>
        </Container>
      </section>

      <section className={style.sectionProjects}>
        <Container>
          <h2 className={style.subTitle}>Proyectos Personales</h2>

          <article className={style.projectSummary}>
            <div className={style.mockupWrapper}>
              <div className={style.mockupLayer}>
                <picture>
                  <img className={style.mockup}
                    src="/images/static/example.png"
                    alt="example mockup"
                  />
              </picture>
              </div>
            </div>
            <div className={style.infoWrapper}>
              <h3 className={style.projectTitle}>Blogr Landing Page</h3>
              <div className={style.info}>
                <p>Stack:</p>
                <ul>
                  <li>NextJS</li>
                  <li>TypeScript</li>
                  <li>SCSS (Sass)</li>
                  <li>CSS Modules</li>
                  <li>Flexbox</li>
                  <li>RWD (Mobile First)</li>
                </ul>
              </div>
              <div className={style.buttonsWrapper}>
                <a className={style.button}
                  href="https://blogr-landing-page-orcin.vercel.app"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Ver Online
                </a>

                <a className={style.button}
                  href="https://github.com/rodolfomayora/blogr-landing-page.git"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </article>

          <article className={style.projectSummary}>
            <div className={style.infoWrapper}>
              <h3 className={style.projectTitle}>Easybank Landing Page</h3>
              <div className={style.info}>
                <p>Stack:</p>
                <ul>
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>TypeScript</li>
                  <li>SCSS (Sass)</li>
                  <li>CSS Modules</li>
                  <li>CSS Grid</li>
                  <li>Flexbox</li>
                  <li>RWD (Mobile First)</li>
                </ul>
              </div>
              <div className={style.buttonsWrapper}>
                <a className={style.button}
                  href="https://rodolfomayora.github.io/easybank-landing-page"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Ver Online
                </a>

                <a className={style.button}
                  href="https://github.com/rodolfomayora/easybank-landing-page.git"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
            <div className={style.mockupWrapper}>
              <div className={style.mockupLayer}>
                <picture>
                  <img className={style.mockup}
                    src="/images/static/example.png"
                    alt="example mockup"
                  />
              </picture>
              </div>
            </div>
          </article>

          <article className={style.projectSummary}>
            <div className={style.mockupWrapper}>
              <div className={style.mockupLayer}>
                <picture>
                  <img className={style.mockup}
                    src="/images/static/example.png"
                    alt="example mockup"
                  />
              </picture>
              </div>
            </div>
            <div className={style.infoWrapper}>
              <h3 className={style.projectTitle}>Insure Landing Page</h3>
              <div className={style.info}>
                <p>Stack:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS (Sass)</li>
                  <li>Javascript</li>
                  <li>Flexbox</li>
                </ul>
              </div>
              <div className={style.buttonsWrapper}>
                <a className={style.button}
                  href="https://rodolfomayora.github.io/insure-landing-page"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Ver Online
                </a>

                <a className={style.button}
                  href="https://github.com/rodolfomayora/insure-landing-page.git"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </article>

          <div className={style.button}>Ver más proyectos</div>

        </Container>
      </section>

      {/* <section>
        <Container>
          <h2 className={style.title}>Intereses</h2>
        </Container>
      </section> */}
    </main>
  </Layout>
)

export default Home;