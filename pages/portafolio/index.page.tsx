import React, { FC } from 'react';

import { projects } from '../../data';
import { addCustomId } from '../../utils';
import {
  AuroraBackground,
  Layout,
  PageSection,
  ProjectSummary,
} from '../../components';
import styles from './styles.module.scss';

const Portafolio: FC = () => {
  const pageTitle: string = 'Portafolio';
  const portfolio: Array<any> = projects.map(addCustomId);

  return (
    <Layout pageTitle={pageTitle}>
      <main>
        <section className={styles.decorationSection}>
          <AuroraBackground />
          <h1 className={styles.mainTitle}>{pageTitle}</h1>
        </section>

        <PageSection>
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
        </PageSection>
      </main>
    </Layout>
  );
}

export default Portafolio;