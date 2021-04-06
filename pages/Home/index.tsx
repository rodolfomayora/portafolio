import React, { FC } from 'react';
import {
  Layout,
  Container,
  AuroraBackground,
  TecnologyBlock,
  MainButtonWrapper,
  ProyectSummary
} from '../../components';
import style from './style.module.scss';
import { Github, Linkedin, Telegram} from '../../public/images';

const Home: FC = () => {

  const tecnologiesBase: Array<any> = [
    {
      name: 'ReactJS',
      image: '/images/svg/react.svg'
    },
    {
      name: 'TypesScript',
      image: '/images/svg/typescript.svg'
    },
    {
      name: 'Javascript',
      image: '/images/svg/javascript.svg'
    },
    {
      name: 'Sass',
      image: '/images/svg/sass.svg'
    },
    {
      name: 'Git',
      image: '/images/svg/git.svg'
    },
    {
      name: 'Yarn',
      image: '/images/svg/yarn.svg'
    },
    {
      name: 'NextJS',
      image: '/images/svg/nextjs.svg'
    },
    {
      name: 'HTML5',
      image: '/images/svg/html5.svg'
    },
    {
      name: 'CSS3',
      image: '/images/svg/css3.svg'
    },
    {
      name: 'Redux',
      image: '/images/svg/redux.svg'
    },
    // {
    //   name: '',
    //   image: ''
    // }
  ]

  const projectsData: Array<any> = [
    {
      proyectTitle: 'Blogr Landing Page',
      mockup: '/images/static/blogr-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, Responsive Web Design',
      webType: 'Estático',
      renderType: 'Static Generation (SSG) sin datos',
      sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
      deployURL: 'https://blogr-landing-page-orcin.vercel.app'
    },
    {
      proyectTitle: '',
      mockup: '/images/static/easybank-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, Responsive Web Design',
      webType: 'Single Page Aplication (SPA)',
      renderType: 'Client Side Rendering (CSR)',
      sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
      deployURL: 'https://rodolfomayora.github.io/easybank-landing-page'
    },
    {
      proyectTitle: 'Insure Landing Page',
      mockup: '/images/static/insure-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design',
      webType: 'Estático',
      sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
      deployURL: 'https://rodolfomayora.github.io/insure-landing-page'
    },
    // {
    //   proyectTitle: '',
    //   mockup: '',
    //   focusDevelopment: '',
    //   stack: '',
    //   webType: '',
    //   renderType: '',
    //   sourceCodeURL: '',
    //   deployURL: ''
    // }
  ]

  const addId = (item: any, index: number) => {
    return {
      ...item,
      customId: (index + 1).toString()
    }
  }

  const tecnologies: Array<any> = tecnologiesBase.map(addId);

  const portfolio: Array<any> = projectsData.map(addId);

  return (
    <Layout pageTitle="Inicio">
      <main className={style.Home}>

        {/* Main Section */}
        <section className={style.mainSection}>
          <AuroraBackground />

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
              {!!tecnologies && tecnologies.map((item: any) => (
                <TecnologyBlock
                  key={item.customId}
                  name={item.name}
                  pathIcon={item.image}
                />
              ))}
              </div>
            </div>
          </Container>
        </section>
  
        {/* Portfolio Section */}
        <section className={style.portfolioSection}>
          <Container>
            <div className={style.sectionWraper}>
              <h2 className={style.sectionTitle}>Portafolio</h2>

              {!!portfolio && portfolio.map((item: any) => (
                <ProyectSummary
                  key={item.customId}
                  title={item.proyectTitle}
                  mockupPath={item.mockup}
                  focusDevelopment={item.focusDevelopment}
                  stack={item.stack}
                  sourceCodeURL={item.sourceCodeURL}
                  deployURL={item.deployURL}
                  renderType={item?.renderType}
                  webType={item.webType}
                />
              ))}              

              <div className={style.more}>
                <MainButtonWrapper>
                  <a>Ver más proyectos</a>
                </MainButtonWrapper>
              </div>
            </div>
          </Container>
        </section>
  
        {/* <section>
          <Container>
            <h2 className={style.title}>Intereses / ¿que tecnologias me gustaria aprender?</h2>
          </Container>
        </section> */}
      </main>
    </Layout>
  )
}

export default Home;