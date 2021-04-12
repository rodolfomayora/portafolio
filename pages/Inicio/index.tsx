import React, { FC } from 'react';
import {
  Layout,
  Container,
  AuroraBackground,
  TecnologyBlock,
  MainButtonWrapper,
  ProjectSummary,
  SocialLinks,
  ContactForm
} from '../../components';
import Link from 'next/link';
import style from './style.module.scss';
// import projects from '../../utils/projects';
// import tecnologies from '../../utils/tecnologies';
import ProjectSummaryType from '../../types/ProjectSummaryType';

const Home: FC = () => {

  const tecnologies: Array<any> = [
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
  ];

  const projectsData: Array<ProjectSummaryType> = [
    {
      title: 'Blogr Landing Page',
      mockupPath: 'blogr-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, Responsive Web Design',
      webType: 'Estático',
      renderType: 'Static Generation (SSG) sin datos',
      sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
      deployURL: 'https://blogr-landing-page-orcin.vercel.app'
    },
    {
      title: 'Easybank Landing Page',
      mockupPath: 'easybank-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, Responsive Web Design',
      webType: 'Single Page Aplication (SPA)',
      renderType: 'Client Side Rendering (CSR)',
      sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
      deployURL: 'https://rodolfomayora.github.io/easybank-landing-page'
    },
    {
      title: 'Insure Landing Page',
      mockupPath: 'insure-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design',
      webType: 'Estático',
      sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
      deployURL: 'https://rodolfomayora.github.io/insure-landing-page'
    },
    {
      title: 'Testimonials Grid Section',
      mockupPath: 'testimonial-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'ReactJS, TypeScript, CSS Modules, CSS Grid, Responsive Web Design',
      webType: 'Estático',
      sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
      deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section'
    },
    {
      title: 'Article Preview Component',
      mockupPath: 'article-preview-mockup.png',
      focusDevelopment: 'Mobile First',
      stack: 'HTML5, CSS3, JavaScript, Responsive Web Design',
      webType: 'Estático',
      sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
      deployURL: 'https://rodolfomayora.github.io/article-preview-component'
    },
    // {
    //   title: '',
    //   mockupPath:  '',
    //   focusDevelopment: '',
    //   stack: '',
    //   webType: '',
    //   renderType: '',
    //   sourceCodeURL: '',
    //   deployURL: ''
    // },
  ];

  const addId = (item: any, index: number) => {
    return {
      ...item,
      customId: (index + 1).toString()
    }
  }

  const myTechSkills: Array<any> = tecnologies.map(addId);

  const portfolio: Array<any> = projectsData
    .slice(0,3)
    .map(addId);

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
                  <SocialLinks />
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
              {!!myTechSkills && myTechSkills.map((item: any) => (
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
            <div className={style.sectionWrapper}>
              <h2 className={style.sectionTitle}>Portafolio</h2>

              {!!portfolio && portfolio.map((item: any) => (
                <ProjectSummary
                  key={item.customId}
                  title={item.title}
                  mockupPath={item.mockupPath}
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
                  <Link href="/Portafolio">
                    <a>Ver más proyectos</a>
                  </Link>
                </MainButtonWrapper>
              </div>
            </div>
          </Container>
        </section>
                
        {/* Contact Section */}
        <section className={style.contactSection}>
          <Container>
            <div className={style.sectionWrapper}>
              <h2 className={style.sectionTitle}>Contacto</h2>

              <div className={style.contactFormWrapper}> 
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default Home;