import { Button } from '#components/Button';
import { TechnologyTag } from '#components/TechnologyTag';
import { ExternalLink } from '#components/ExternalLink';
import { MockupViewer } from '#components/MockupViewer';
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

  const hasWebType: boolean = !!webType;
  const hasRenderPatter: boolean = !!renderPatter;
  const hasApiIntegration: boolean = !!Object.keys(apiIntegration).length;
  const hasSampleData: boolean = !!Object.keys(sampleDataFrom).length;

  const tagStack = stack.split(', ').map((name, index) => {
    return <TechnologyTag key={String(index + 1)}  name={name} />
  });

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
            <span className={styles.label}>Categoría: </span>
            {category}
          </p>

          {developmentApproaches && (
            <p>
            <span className={styles.label}>Enfoques de desarrollo: </span>
              {developmentApproaches}
            </p>
          )}

          <div className={styles.techStack}>
            <span className={styles.label}>Stack:</span>
            {tagStack}
          </div>
          
          {hasWebType && (
            <p>
              <span className={styles.label}>Tipo de sitio web: </span>
              {webType}
            </p>
          )}
          
          {hasRenderPatter && (
            <p>
              <span className={styles.label}>Tipo de renderizado: </span>
              {renderPatter}
            </p>
          )}

          {hasApiIntegration && (
            <p className={styles.link}>
              <span className={styles.label}>API Integrada: </span>
              <ExternalLink href={apiIntegration.url}>
                {apiIntegration.name}
              </ExternalLink>
            </p>
          )}

          {hasSampleData && (
            <p className={styles.link}>
              <span className={styles.label}>Datos de Ejemplo: </span>
              <ExternalLink href={sampleDataFrom.url}>
                {sampleDataFrom.name}
              </ExternalLink>
            </p>
          )}
          
          <span className={styles.deploy}>
            <span className={styles.label}>Desplegado en: </span>
            <TechnologyTag name={deploymentPlatform} />
          </span>
        </div>
  
        <div className={styles.buttonsWrapper}>
          <Button
            as="externalLink"
            fullWidth
            href={deployURL}>
            Ver Online
          </Button>

          <Button
            as="externalLink"
            fullWidth
            outline
            href={sourceCodeURL}>
            Código Fuente
          </Button>
        </div>
      </div>
    </div>
  );
}