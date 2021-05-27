import React, { FC, useEffect } from 'react';
import ProjectSummaryProps from './type';
import style from './style.module.scss';
import MainButtonWrapper from '../MainButtonWrapper'

const ProjectSummary: FC<ProjectSummaryProps> = ({
  title,
  mockupPath,
  focusDevelopment,
  stack,
  webType,
  renderType,
  sourceCodeURL,
  deployURL,
  apiIntegration
}) => {

  const projectMockupPath: string = '/images/static/';

  return (
    <article className={style.ProjectSummary}>
      <div className={style.mockupWrapperDesktop}>
        <div className={style.mockupLayer}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${projectMockupPath}medium_${mockupPath}`}
            />
            <img className={style.mockup}
              src={`${projectMockupPath}${mockupPath}`}
              alt={`${title} Mockup`}
              width="270"
              height="140"
            />
          </picture>
        </div>
      </div>
  
      <div className={style.infoWrapper}>
        <h3 className={style.projectTitle}>
          {title}
        </h3>
  
        <div className={style.mockupWrapperMobile}>
          <div className={style.mockupLayer}>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${projectMockupPath}medium_${mockupPath}`}
              />
              <img className={style.mockup}
                src={`${projectMockupPath}${mockupPath}`}
                alt={`${title} Mockup`}
                width="270"
                height="140"
              />
            </picture>
          </div>
        </div>
        <div className={style.info}>
          <p>
            <span className={style.label}>Enfoque de desarrollo: </span>
            {focusDevelopment}
          </p>
          <p>
            <span className={style.label}>Stack: </span>
            {stack}
          </p>
          
          {!!webType && (
            <p>
              <span className={style.label}>Tipo de sitio web: </span>
              {webType}
            </p>
          )}
          
          {!!renderType && (
            <p>
              <span className={style.label}>Tipo de renderizado: </span>
              {renderType}
            </p>
          )}

          {!!Object.keys(apiIntegration).length && (
            <p>
              <span className={style.label}>API Integrada: </span>
              <a
                href={apiIntegration.url}
                target="_blank" 
                rel="external noopener noreferrer"
              >
                {apiIntegration.name}
              </a>
            </p>
          )}
        </div>
  
        <div className={style.buttonsWrapper}>
          <MainButtonWrapper>
            <a
              href={deployURL}
              target="_blank"
              rel="external noopener noreferrer"
            >
              Ver Online
            </a>
          </MainButtonWrapper>
          <MainButtonWrapper>
            <a
              href={sourceCodeURL}
              target="_blank"
              rel="external noopener noreferrer"
            >
              Código Fuente
            </a>
          </MainButtonWrapper>
        </div>
      </div>
    </article>
  );
}

export default ProjectSummary;