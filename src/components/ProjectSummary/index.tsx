import { Button } from '#components/Button';
import { TechnologyTag } from '#components/TechnologyTag';
import { ExternalLink } from '#components/ExternalLink';
import { MockupViewer } from '#components/MockupViewer';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import ProjectSummaryProps from './types';
import styles from './styles.module.scss';

export function ProjectSummary(props: ProjectSummaryProps) {
  const {
    apiIntegration,
    category,
    deployURL,
    deploymentPlatform,
    developmentApproaches,
    mockupPath,
    renderPatter,
    sourceCodeURL,
    stack,
    title,
    webType,
    sampleDataFrom,
  } = props;

  const hasWebType = !!webType;
  const hasRenderPatter = !!renderPatter;
  const hasApiIntegration = !!Object.keys(apiIntegration).length;
  const hasSampleData = !!Object.keys(sampleDataFrom).length;

  const tagStack = stack.split(', ').map((name, index) => {
    return <TechnologyTag key={String(index + 1)}  name={name} />
  });

  const { t } = useLocaleDictionary();

  return (
    <div className={styles.ProjectSummary}>
      <div className={styles.mockupWrapperDesktop}>
        <MockupViewer 
          mockupFileName={mockupPath}
          title={title} />
      </div>
  
      <div className={styles.inforWrapper}>
        <h3 className={styles.projectTitle}>{title}</h3>
  
        <div className={styles.mockupWrapperMobile}>
          <MockupViewer 
            mockupFileName={mockupPath}
            title={title} />
        </div>
        <div className={styles.info}>
          <p>
            <span className={styles.label}>
              {t.category}:{" "}
            </span>
            {category}
          </p>

          {developmentApproaches && (
            <p>
              <span className={styles.label}>
                {t.development_approaches}:{" "}
              </span>
              {developmentApproaches}
            </p>
          )}

          <div className={styles.techStack}>
            <span className={styles.label}>
              Stack:
            </span>
            {tagStack}
          </div>
          
          {hasWebType && (
            <p>
              <span className={styles.label}>
                {t.website_type}:{" "}
              </span>
              {webType}
            </p>
          )}
          
          {hasRenderPatter && (
            <p>
              <span className={styles.label}>
                {t.render_patter}:{" "}
              </span>
              {renderPatter}
            </p>
          )}

          {hasApiIntegration && (
            <p className={styles.link}>
              <span className={styles.label}>
                {t.api_integration}:{" "}
              </span>
              <ExternalLink href={apiIntegration.url}>
                {apiIntegration.name}
              </ExternalLink>
            </p>
          )}

          {hasSampleData && (
            <p className={styles.link}>
              <span className={styles.label}>
                {t.sample_data}:{" "}
              </span>
              <ExternalLink href={sampleDataFrom.url}>
                {sampleDataFrom.name}
              </ExternalLink>
            </p>
          )}
          
          <span className={styles.deploy}>
            <span className={styles.label}>
              {t.deploy_on}:{" "}
            </span>
            <TechnologyTag name={deploymentPlatform} />
          </span>
        </div>
  
        <div className={styles.buttonsWrapper}>
          <Button
            as="externalLink"
            fullWidth
            href={deployURL}
          >
            {t.see_online}
          </Button>

          <Button
            as="externalLink"
            fullWidth
            outline
            href={sourceCodeURL}
          >
            {t.source_code}
          </Button>
        </div>
      </div>
    </div>
  );
}