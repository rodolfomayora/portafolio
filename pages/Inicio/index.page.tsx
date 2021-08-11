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
  TechnologyBlock,
} from '../../components';
import {
  ButtonWrapper,
  ContactFormWrapper,
  FrostedLayer,
  InfoWrapper,
  MainTittle,
  MainSection,
  MainSectionContent,
  PageSection,
  PageSection2,
  SocialLinksWrapper,
  Subtitle,
  TechnologyGrid,
  TechRole,
} from './styles';

const Home: FC = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  useEffect(() => {
    const updateViewportHeight = () => {
      const windowInnerHeight: number = window.innerHeight;
      setViewportHeight(windowInnerHeight);
    }

    window.addEventListener('resize', updateViewportHeight);
    
    () => {
      window.removeEventListener('resize', updateViewportHeight);
    }
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
      <main>
        <MainSection mainSectionHeight={viewportHeight}>
          <AuroraBackground />
          <Container>
            <MainSectionContent>
              <FrostedLayer />

              <InfoWrapper>
                <MainTittle>
                  RODOLFO<br />
                  MAYORA<br />
                  PEREDA
                </MainTittle>
                
                <TechRole>FRONTEND DEVELOPER</TechRole>

                <SocialLinksWrapper>
                  <SocialLinks />
                </SocialLinksWrapper>
              </InfoWrapper>
            </MainSectionContent>
          </Container>
        </MainSection>

        {/* Tech Skills Section */}
          <PageSection>
            <Container>
              <Subtitle>¿Qué utilizo?</Subtitle>
              <TechnologyGrid>
                {myTechSkills?.map(technology => (
                  <TechnologyBlock
                    key={technology.customId}
                    name={technology.name}
                    pathIcon={technology.image}/>
                ))}
              </TechnologyGrid>
            </Container>
          </PageSection>
  
        {/* Portfolio Section */}
        <PageSection2>
          <Container>
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

            <ButtonWrapper>
              <Button
                as="innerLink"
                href="/Portafolio"
                fullWidth>
                Ver más proyectos
              </Button>
            </ButtonWrapper>
          </Container>
        </PageSection2>
                
        {/* Contact Section */}
        <PageSection2>
          <Container>
            <Subtitle>Contacto</Subtitle>

            <ContactFormWrapper> 
              <ContactForm />
            </ContactFormWrapper>
          </Container>
        </PageSection2>
      </main>
    </Layout>
  );
}

export default Home;