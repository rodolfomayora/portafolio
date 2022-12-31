import React, { FC } from 'react';

import Button from '../Button';
import ExternalLink from '../ExternalLink';
import MockupViewer from '../MockupViewer';
import ProjectSummaryProps from './types';
import styles from './styles.module.scss';

const ProjectSummary: FC<ProjectSummaryProps> = props => {

  const {
    apiIntegration,
    deployURL,
    focusDevelopment,
    mockupPath,
    renderType,
    sourceCodeURL,
    stack,
    title,
    webType,
    sampleDataFrom,
  } = props;

  const hasWebType: boolean = !!webType;
  const hasRenderType: boolean = !!renderType;
  const hasApiIntegration: boolean = !!Object.keys(apiIntegration).length;
  const hasSampleData: boolean = !!Object.keys(sampleDataFrom).length;

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
            <span className={styles.label}>Enfoque de desarrollo: </span>
            {focusDevelopment}
          </p>
          <p>
            <span className={styles.label}>Stack: </span>
            {stack}
          </p>
          
          {hasWebType && (
            <p>
              <span className={styles.label}>Tipo de sitio web: </span>
              {webType}
            </p>
          )}
          
          {hasRenderType && (
            <p>
              <span className={styles.label}>Tipo de renderizado: </span>
              {renderType}
            </p>
          )}

          {hasApiIntegration && (
            <p>
              <span className={styles.label}>API Integrada: </span>
              <ExternalLink href={apiIntegration.url}>
                {apiIntegration.name}
              </ExternalLink>
            </p>
          )}

          {hasSampleData && (
            <p>
              <span className={styles.label}>Datos de Ejemplo: </span>
              <ExternalLink href={sampleDataFrom.url}>
                {sampleDataFrom.name}
              </ExternalLink>
            </p>
          )}
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

export default ProjectSummary;