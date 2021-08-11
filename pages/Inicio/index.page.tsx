import React, { FC, useEffect, useState } from 'react';

import projects from '../../utils/projects';
import tecnologies from '../../utils/tecnologies';
import {
  AuroraBackground,
  Button,
  ContactForm,
  Container,
  Layout,
  ProjectSummary,
  SocialLinks,
  TecnologyBlock,
} from '../../components';

import style from './style.module.scss';

import {
  ContactFormWrapper,
  PageSection,
  Subtitle,
  TecnologyGrid,
} from './styles';

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
              <Subtitle>¿Qué utilizo?</Subtitle>
              <TecnologyGrid>
                {myTechSkills?.map(technology => (
                  <TecnologyBlock
                    key={technology.customId}
                    name={technology.name}
                    pathIcon={technology.image}/>
                ))}
              </TecnologyGrid>
            </div>
          </Container>
        </section>
  
        {/* Portfolio Section */}
        <section className={style.portfolioSection}>
          <Container>
            <PageSection>
              <Subtitle>Portafolio</Subtitle>

              {portfolio?.map(project => (
                <ProjectSummary
                  key={project.customId}
                  apiIntegration={{ ...project.apiIntegration }}
                  deployURL={project.deployURL}
                  focusDevelopment={project.focusDevelopment}
                  mockupPath={project.mockupPath}
                  title={project.title}
                  renderType={project?.renderType}
                  sourceCodeURL={project.sourceCodeURL}
                  stack={project.stack}
                  webType={project.webType}/>
              ))}              


              <div className={style.more}>
                <Button
                  as="innerLink"
                  href="/Portafolio"
                  fullWidth>
                  Ver más proyectos
                </Button>
              </div>

            </PageSection>
          </Container>
        </section>
                
        {/* Contact Section */}
        <Container>
          <PageSection>
            <Subtitle>Contacto</Subtitle>

            <ContactFormWrapper> 
              <ContactForm />
            </ContactFormWrapper>
          </PageSection>
        </Container>
      </main>
    </Layout>
  );
}

export default Home;