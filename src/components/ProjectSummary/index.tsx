import { ButtonLink } from '#components/ButtonLink';
import { ButtonLinkOutlined } from '#components/ButtonLinkOutlined';
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

  const { t } = useLocaleDictionary();


  const tagStack = stack.map((name) => {
    const key = crypto.randomUUID();
    return (
      <TechnologyTag key={key}>
        {name}
      </TechnologyTag>
    );
  });

  const approachesToDisplay = !!developmentApproaches ? (
    <p>
      <span className={styles.label}>
        {t.development_approaches}:{" "}
      </span>
      {developmentApproaches}
    </p>
  ) : null;

  const webTypeToDisplay = !!webType ? (
    <p>
      <span className={styles.label}>
        {t.website_type}:{" "}
      </span>
      {webType}
    </p>
  ) : null;

  const renderPatterToDisplay = !!renderPatter ? (
    <p>
      <span className={styles.label}>
        {t.render_patter}:{" "}
      </span>
      {renderPatter}
    </p>
  ) : null;

  const hasApiIntegration = !!Object.keys(apiIntegration).length;
  const apiIntegrationToDisplay = hasApiIntegration ? (
    <p className={styles.link}>
      <span className={styles.label}>
        {t.api_integration}:{" "}
      </span>
      <ExternalLink href={apiIntegration.url}>
        {apiIntegration.name}
      </ExternalLink>
    </p>
  ) : null;

  const hasSampleData = !!Object.keys(sampleDataFrom).length;
  const sampleDataToDisplay = hasSampleData ? (
    <p className={styles.link}>
      <span className={styles.label}>
        {t.sample_data}:{" "}
      </span>
      <ExternalLink href={sampleDataFrom.url}>
        {sampleDataFrom.name}
      </ExternalLink>
    </p>
  ) : null;


  const imageLayerBackground = `
    linear-gradient(to bottom, #ffffff70, #ffffff),
    url("/images/${mockupPath}.webp")
  `;

  return (
    <section className={styles.ProjectSummary}>
      <div className={styles.mockupWrapperDesktop}>
        <MockupViewer 
          mockupFileName={mockupPath}
          alt={title}
        />
      </div>
  
      <div className={styles.inforWrapper}>
        <h3 className={styles.projectTitle}>{title}</h3>
  
        <div className={styles.mockupWrapperMobile}>
          <MockupViewer 
            mockupFileName={mockupPath}
            alt={title}
          />
        </div>
        <div className={styles.info}>
          <p>
            <span className={styles.label}>
              {t.category}:{" "}
            </span>
            {category}
          </p>

          {approachesToDisplay}

          <div className={styles.techStack}>
            <span className={styles.label}>
              Stack:
            </span>
            {tagStack}
          </div>
          
          {webTypeToDisplay}
          
          {renderPatterToDisplay}

          {apiIntegrationToDisplay}

          {sampleDataToDisplay}
          
          <span className={styles.deploy}>
            <span className={styles.label}>
              {t.deploy_on}:{" "}
            </span>
            <TechnologyTag>{deploymentPlatform}</TechnologyTag>
          </span>
        </div>
  
        <div className={styles.buttonsWrapper}>
          <ButtonLink href={deployURL} style={{ width: '100%' }}>
            {t.see_online}
          </ButtonLink>

          <ButtonLinkOutlined href={sourceCodeURL} style={{ width: '100%' }}>
            {t.source_code}
          </ButtonLinkOutlined>
        </div>
      </div>

      <div className={styles.imageLayer}
        style={{ backgroundImage: imageLayerBackground }}
      ></div>
    </section>
  );
}