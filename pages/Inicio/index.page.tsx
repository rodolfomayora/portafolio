import React, { FC, useEffect, useState } from 'react';

import { projects, technologies } from '../../data';
import { addCustomId } from '../../utils';
import {
  AuroraBackground,
  Button,
  ContactForm,
  Container,
  Layout,
  PageSection,
  ProjectSummary,
  SocialLinks,
  TechnologyBlock,
} from '../../components';
import styles from './styles.module.scss';

const Home: FC = () => {
  // this logis its mostly for mobile screens
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  useEffect(() => {
    const updateViewportHeight = () => {
      const windowInnerHeight: number = window.innerHeight;
      setViewportHeight(windowInnerHeight);
    }

    updateViewportHeight();
  },
  [])

  const myTechSkills: Array<any> = technologies.map(addCustomId);

  const portfolio: Array<any> = projects.slice(0,3).map(addCustomId);

  const viewportHeightStyle = {
    '--viewport-height': `${viewportHeight}px`
  }

  const mainSectionHeight = !!viewportHeight ? viewportHeightStyle : {};

  return (
    <Layout pageTitle="Inicio">
      <main>
        {/* Main Section */}
        <section className={styles.mainSection} style={mainSectionHeight}>
          <AuroraBackground />
          <Container>
            <div className={styles.mainSectionContent}>
              <div className={styles.frostedLayer} />

              <div className={styles.infoWrapper}>
                <h1 className={styles.mainTitle}>
                  RODOLFO<br />
                  MAYORA<br />
                  PEREDA
                </h1>
                
                <span className={styles.techRole}>FRONTEND DEVELOPER</span>

                <div className={styles.socialLinksWrapper}>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Skills Section */}
        <PageSection whiteColor>
          <h2 className={styles.subtitle}>¿Qué utilizo?</h2>
          
          <div className={styles.technologyGrid}>
            {myTechSkills?.map(technology => (
              <TechnologyBlock
                key={technology.customId}
                name={technology.name}
                pathIcon={technology.image}/>
            ))}
          </div>
        </PageSection>
  
        {/* Portfolio Section */}
        <PageSection>
            <h2 className={styles.subtitle}>Portafolio</h2>

            {portfolio?.map(project => (
              <ProjectSummary
                key={project.customId}
                apiIntegration={{ ...project.apiIntegration }}
                sampleDataFrom={{ ...project.sampleDataFrom }}
                deployURL={project.deployURL}
                focusDevelopment={project.focusDevelopment}
                mockupPath={project.mockupPath}
                renderType={project?.renderType}
                sourceCodeURL={project.sourceCodeURL}
                stack={project.stack}
                title={project.title}
                webType={project.webType}/>
            ))}              

            <div className={styles.buttonWrapper}>
              <Button
                as="innerLink"
                href="/Portafolio"
                fullWidth>
                Ver más proyectos
              </Button>
            </div>
        </PageSection>

        {/* Contact Section */}
        <PageSection>
          <h2 className={styles.subtitle}>Contacto</h2>
          <div className={styles.contactFormWrapper}> 
            <ContactForm />
          </div>
        </PageSection>
      </main>
    </Layout>
  );
}

export default Home;