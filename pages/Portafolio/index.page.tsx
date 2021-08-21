import React, { FC } from 'react';

import { projects } from '../../data';
import { addCustomId } from '../../utils';
import {
  AuroraBackground,
  Container,
  Layout,
  ProjectSummary,
} from '../../components';
import {
  DecorationSection,
  MainTitle,
  PageSection,
  Main,
} from './styles';

const Portafolio: FC = () => {

  const pageTitle: string = 'Portafolio';
  const portfolio: Array<any> = projects.map(addCustomId);

  return (
    <Layout pageTitle={pageTitle}>
      <Main>
        <DecorationSection>
          <AuroraBackground />
          <MainTitle>{pageTitle}</MainTitle>
        </DecorationSection>

        <PageSection>
          <Container>
            {portfolio?.map(project => (
              <ProjectSummary
                key={project.customId}
                apiIntegration={{ ...project.apiIntegration }}
                sampleDataFrom={{ ...project.sampleDataFrom }}
                deployURL={project.deployURL}
                focusDevelopment={project.focusDevelopment}
                mockupPath={project.mockupPath}
                renderType={project.renderType}
                sourceCodeURL={project.sourceCodeURL}
                stack={project.stack}
                title={project.title}
                webType={project.webType} />
            ))}
          </Container>
        </PageSection>
      </Main>
    </Layout>
  );
}

export default Portafolio;