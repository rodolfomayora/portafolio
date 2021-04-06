import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';
import { Github, Linkedin, Telegram} from '../../public/images';

import { Nextjs } from '../../public/images';

const Home: FC = () => {


  return (
    <Layout pageTitle="Inicio">
      <main className={style.Home}>

        {/* Main Section */}
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
            <div className={style.sectionWrapper}>
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
  
        {/* Tech Skills Section */}
        <section className={style.sectionTechSkills}>
          <Container>
            <div className={style.sectionWrapper}>
              <h2 className={style.sectionTitle}>¿Qué utilizo?</h2>
              <div className={style.tecnologies}>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/react.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>ReactJS</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/typescript.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>TypeScript</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/javascript.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>Javascript</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/sass.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>Sass</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/git.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>Git</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/yarn.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>Yarn</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/nextjs.svg" alt="Tecnology"/>
                    {/* <Nextjs /> */}
                  </div>
                  <span className={style.label}>NextJS</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/html5.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>HTML5</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/css3.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>CSS3</span>
                </div>

                <div className={style.tecnology}>
                  <div className={style.brandLogo}>
                    <img src="/images/svg/redux.svg" alt="Tecnology"/>
                  </div>
                  <span className={style.label}>Redux</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
  
        {/* Portfolio Section */}
        <section className={style.portfolioSection}>
          <Container>
            <div className={style.sectionWraper}>
              <h2 className={style.sectionTitle}>Portafolio</h2>
    
              <article className={style.projectSummary}>

                <div className={style.mockupWrapperDesktop}>
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

                  <div className={style.mockupWrapperMobile}>
                    <div className={style.mockupLayer}>
                      <picture>
                        <img className={style.mockup}
                          src="/images/static/blogr-mockup.png"
                          alt="Blogr Landing Page Mockup"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className={style.info}>
                    <p>
                      <span className={style.label}>Enfoque de desarrollo: </span>
                      Mobile First
                    </p>
                    <p>
                      <span className={style.label}>Stack: </span>
                      NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, Responsive Web Design
                    </p>
                    <p>
                      <span className={style.label}>Tipo de sitio web:</span>
                      Estático
                    </p>
                    <p>
                      <span className={style.label}>Tipo de renderizado: </span>
                      Static Generation (SSG) sin datos
                    </p>
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

                  <div className={style.mockupWrapperMobile}>
                    <div className={style.mockupLayer}>
                      <picture>
                        <img className={style.mockup}
                          src="/images/static/easybank-mockup.png"
                          alt="Easybank Landing Page Mockup"
                        />
                    </picture>
                    </div>
                  </div>

                  <div className={style.info}>
                    <p>
                      <span className={style.label}>Enfoque de desarrollo: </span> Mobile First
                    </p>
                    <p>
                      <span className={style.label}>Stack: </span>
                      ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, Responsive Web Design
                    </p>
                    <p>
                      <span className={style.label}>Tipo de sitio web: </span>
                      Single Page Aplication (SPA)
                    </p>
                    <p>
                      <span className={style.label}>Tipo de renderizado: </span>
                      Client Side Rendering (CSR)
                    </p>
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

                <div className={style.mockupWrapperDesktop}>
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
                <div className={style.mockupWrapperDesktop}>
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

                  <div className={style.mockupWrapperMobile}>
                    <div className={style.mockupLayer}>
                      <picture>
                        <img className={style.mockup}
                          src="/images/static/insure-mockup.png"
                          alt="Insure Landing Page Mockup"
                        />
                    </picture>
                    </div>
                  </div>

                  <div className={style.info}>
                    <p>
                      <span className={style.label}>Enfoque de desarrollo: </span>
                      Mobile First
                    </p>
                    <p>
                      <span className={style.label}>Stack: </span>
                      HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design
                    </p>
                    <p>
                      <span className={style.label}>Tipo de sitio web: </span> 
                      Estático
                    </p>
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
    
              <div className={style.button + ' ' + style.more}>
                Ver más proyectos
              </div>
            </div>
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