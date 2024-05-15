import { projectsData } from '#data/projects';
import { addCustomId } from '#utils/addCustomId';
import { ProjectSummary } from '#components/ProjectSummary';
import { PageSection } from '#components/PageSection';
import { ButtonLink } from '#components/ButtonLink';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

export function PortfolioSection () {
  const { t } = useLocaleDictionary();
  
  const portfolio = projectsData.slice(0,4).map(addCustomId);

  const projectsToRender = portfolio?.map(project => (
    <ProjectSummary
      key={project.customId}
      apiIntegration={{ ...project.apiIntegration }}
      sampleDataFrom={{ ...project.sampleDataFrom }}
      category={project.category}
      deployURL={project.deployURL}
      developmentApproaches={project.developmentApproaches}
      mockupPath={project.mockupPath}
      renderPatter={project?.renderPatter}
      sourceCodeURL={project.sourceCodeURL}
      stack={project.stack}
      title={project.title}
      webType={project.webType}
      deploymentPlatform={project.deploymentPlatform} />
  ))

  return (
    <PageSection>
      <h2 className={styles.subtitle}>{t.portfolio}</h2>
      {projectsToRender}              
      <div className={styles.buttonWrapper}>
        <ButtonLink
          href="/portfolio"
          style={{ width: '100%' }}
        >
          {t.see_more_projects}
        </ButtonLink>
      </div>
    </PageSection>
  );
}