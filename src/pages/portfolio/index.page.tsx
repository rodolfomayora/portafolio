import { projects } from '../../data';
import { addCustomId } from '#utils/addCustomId';
import { BasicLayout } from '#layouts/BasicLayout';
import { PageSection } from '#components/PageSection';
import { ProjectSummary } from '#components/ProjectSummary';
import { AuroraBackground } from '#components/AuroraBackground';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

function Portfolio () {
  const { t } = useLocaleDictionary();
  const pageTitle = t.portfolio;
  const portfolio: Array<any> = projects.map(addCustomId);
  const projectsToRender = portfolio?.map(project => (
    <ProjectSummary
      key={project.customId}
      apiIntegration={{ ...project.apiIntegration }}
      sampleDataFrom={{ ...project.sampleDataFrom }}
      category={project.category}
      deployURL={project.deployURL}
      developmentApproaches={project.developmentApproaches}
      mockupPath={project.mockupPath}
      renderPatter={project.renderPatter}
      sourceCodeURL={project.sourceCodeURL}
      stack={project.stack}
      title={project.title}
      webType={project.webType}
      deploymentPlatform={project.deploymentPlatform} />
  ));
  return (
    <BasicLayout pageTitle={pageTitle}>
      <main>
        <section className={styles.decorationSection}>
          <AuroraBackground />
          <h1 className={styles.mainTitle}>{pageTitle}</h1>
        </section>
        <PageSection>
          {projectsToRender}
        </PageSection>
      </main>
    </BasicLayout>
  );
}

export default Portfolio;