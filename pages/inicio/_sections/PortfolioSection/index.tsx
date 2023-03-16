import { FC } from 'react';
import { projects } from '../../../../data';
import { addCustomId } from '../../../../utils';
import {
  Button,
  PageSection,
  ProjectSummary,
} from '../../../../components';
import styles from './styles.module.scss';

const PortfolioSection: FC = () => {

  const portfolio: Array<any> = projects.slice(0,3).map(addCustomId);

  return (
    <PageSection>
      <h2 className={styles.subtitle}>Portafolio</h2>

      {portfolio?.map(project => (
        <ProjectSummary
          key={project.customId}
          apiIntegration={{ ...project.apiIntegration }}
          sampleDataFrom={{ ...project.sampleDataFrom }}
          category={project.category}
          deployURL={project.deployURL}
          focusDevelopment={project.focusDevelopment}
          mockupPath={project.mockupPath}
          renderType={project?.renderType}
          sourceCodeURL={project.sourceCodeURL}
          stack={project.stack}
          title={project.title}
          webType={project.webType}
          deploymentPlatform={project.deploymentPlatform} />
      ))}              

      <div className={styles.buttonWrapper}>
        <Button
          as="innerLink"
          href="/portafolio"
          fullWidth>
          Ver más proyectos
        </Button>
      </div>
    </PageSection>
  );
}

export default PortfolioSection;