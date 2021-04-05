import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';
import { Github, Linkedin, Telegram} from '../../public/images';

import { Nextjs } from '../../public/images';

const Home: FC = () => {


  return (
    <Layout pageTitle="Inicio">
      <main className={style.Home}>

        <section className={style.mainSection}>
          <div className={style.layerContainer}>
            <div className={style.layer}>
              <div className={style.shape}></div>
              <div className={style.shape}></div>
              <div className={style.shape}></div>
              <div className={style.shape}></div>
              <div className={style.shape}></div>
            </div>
          </div>

          <Container>
            <div className={style.sectionContainer}>
              <div className={style.frostedLayer}></div>

              <div className={style.infoWrapper}>
                <h1 className={style.mainTitle}>
                  RODOLFO<br />
                  MAYORA<br />
                  PEREDA
                </h1>
                <div className={style.techRol}>
                  FRONTEND DEVELOPER
                </div>
                <div className={style.socialLinks}>
                  <Github className={style.link} />
                  <Linkedin className={style.link} />
                  <Telegram className={style.link} />
                </div>
              </div>
            </div>
          </Container>
        </section>
  
        <section className={style.sectionTechSkills}>
          <Container>
            <h2 className={style.sectionTitle}>¿Qué utilizo?</h2>
            <div className={style.tecnologies}>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/react.svg" alt="Tecnology"/>
                </div>
                <span>ReactJS</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/typescript.svg" alt="Tecnology"/>
                </div>
                <span>TypeScript</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/javascript.svg" alt="Tecnology"/>
                </div>
                <span>Javascript</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/sass.svg" alt="Tecnology"/>
                </div>
                <span>Sass</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/git.svg" alt="Tecnology"/>
                </div>
                <span>Git</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/yarn.svg" alt="Tecnology"/>
                </div>
                <span>Yarn</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/nextjs.svg" alt="Tecnology"/>
                  {/* <Nextjs /> */}
                </div>
                <span>NextJS</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/html5.svg" alt="Tecnology"/>
                </div>
                <span>HTML5</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/css3.svg" alt="Tecnology"/>
                </div>
                <span>CSS3</span>
              </div>

              <div className={style.tecnology}>
                <div className={style.brandLogo}>
                  <img src="/images/svg/redux.svg" alt="Tecnology"/>
                </div>
                <span>Redux</span>
              </div>

            </div>
          </Container>
        </section>
  
        <section className={style.sectionProjects}>
          <Container>
            <h2 className={style.sectionTitle}>Portafolio</h2>
  
            <article className={style.projectSummary}>
              <div className={style.mockupWrapper}>
                <div className={style.mockupLayer}>
                  <picture>
                    <img className={style.mockup}
                      src="/images/static/blogr-mockup.png"
                      alt="Blogr Landing Page Mockup"
                    />
                </picture>
                </div>
              </div>
              <div className={style.infoWrapper}>
                <h3 className={style.projectTitle}>Blogr Landing Page</h3>
                <div className={style.info}>
                  <p>Enfoque de desarrollo: Mobile First</p>

                  <p>Stack: NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, <abbr title="Responsive Web Design">RWD</abbr></p>
                  <p>Tipo de sitio web: Estático</p>
                  <p>Tipo de renderizado: Static Generation (SSG) sin datos</p>
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
                  <p>Enfoque de desarrollo: Mobile First</p>
                  <p>Stack: ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, <abbr title="Responsive Web Design">RWD</abbr></p>
                  <p>Tipo de sitio web: Single Page Aplication (SPA)</p>
                  <p>Tipo de renderizado: Client Side Rendering (CSR)</p>
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
                      src="/images/static/easybank-mockup.png"
                      alt="Easybank Landing Page Mockup"
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
                      src="/images/static/insure-mockup.png"
                      alt="Insure Landing Page Mockup"
                    />
                </picture>
                </div>
              </div>
              <div className={style.infoWrapper}>
                <h3 className={style.projectTitle}>Insure Landing Page</h3>
                <div className={style.info}>
                  <p>Enfoque de desarrollo: Mobile First</p>
                  <p>Stack: HTML, Sass (SCSS), JavaScript, Flexbox</p>
                  <p>Tipo de sitio web: Estático</p>
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
}

export default Home;