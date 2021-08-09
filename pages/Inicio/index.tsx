import React, { FC, useState, useEffect } from 'react';

import Link from 'next/link';

import projects from '../../utils/projects';
import tecnologies from '../../utils/tecnologies';
import {
  AuroraBackground,
  ButtonWrapper,
  ContactForm,
  Container,
  Layout,
  ProjectSummary,
  SocialLinks,
  TecnologyBlock,
} from '../../components';
import style from './style.module.scss';

const Home: FC = () => {

  const [fullHeight, setFullHeight] = useState<string>('100vmax');
  useEffect(() => {
    // real 100vh on mobile
    const windowInnerHeight: string = `${window.innerHeight}px`;
    setFullHeight(windowInnerHeight);
  },
  [])

  const addId = (item: any, index: number) => ({
    ...item,
    customId: (index + 1).toString()
  })

  const myTechSkills: Array<any> = tecnologies.map(addId);

  const portfolio: Array<any> = projects.slice(0,3).map(addId);

  return (
    <Layout pageTitle="Inicio">
      <main className={style.Home}>

        {/* Main Section */}
        <section
          className={style.mainSection}
          style={{ minHeight: fullHeight }}>
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
                  apiIntegration={{ ...item.apiIntegration }}
                />
              ))}              

              <div className={style.more}>
                <ButtonWrapper buttonType="primary">
                  <Link href="/Portafolio">
                    <a>Ver más proyectos</a>
                  </Link>
                </ButtonWrapper>
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

      {/* load image only for inprove UX in other pages through cache */}
      <img style={{
          width: 0,
          height: 0,
          visibility: 'hidden',
          opacity: 0,
          position: 'absolute',
          zIndex: -5
        }}
        src="/images/static/rodolfo-mayora-pereda.jpg"
        alt="Rodolfo Mayora Pereda"
        width="0"
        height="0"
      />
    </Layout>
  )
}

export default Home;