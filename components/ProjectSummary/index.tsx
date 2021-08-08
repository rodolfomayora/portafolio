import React, { FC } from 'react';

import ButtonWrapper from '../ButtonWrapper';
import MockupViewer from '../MockupViewer';
import ProjectSummaryProps from './types';
import {
  ButtonsWrapper,
  Info,
  InfoWrapper,
  Label,
  MockupWrapperDesktop,
  MockupWrapperMobile,
  ProjectTitle,
  ProjectSummaryStyled
} from './styles';

const ProjectSummary: FC<ProjectSummaryProps> = props => {

  const {
    title,
    mockupPath,
    focusDevelopment,
    stack,
    webType,
    renderType,
    sourceCodeURL,
    deployURL,
    apiIntegration
  } = props;

  const hasWebType: boolean = !!webType;
  const hasRenderType: boolean = !!renderType;
  const hasApiIntegration: boolean = !!Object.keys(apiIntegration).length;

  return (
    <ProjectSummaryStyled>
      <MockupWrapperDesktop>
        <MockupViewer 
          mockupFileName={mockupPath}
          title={title} />
      </MockupWrapperDesktop>
  
      <InfoWrapper>
        <ProjectTitle>{title}</ProjectTitle>
  
        <MockupWrapperMobile>
          <MockupViewer 
            mockupFileName={mockupPath}
            title={title} />
        </MockupWrapperMobile>
        <Info>
          <p>
            <Label>Enfoque de desarrollo: </Label>
            {focusDevelopment}
          </p>
          <p>
            <Label>Stack: </Label>
            {stack}
          </p>
          
          {hasWebType && (
            <p>
              <Label>Tipo de sitio web: </Label>
              {webType}
            </p>
          )}
          
          {hasRenderType && (
            <p>
              <Label>Tipo de renderizado: </Label>
              {renderType}
            </p>
          )}

          {hasApiIntegration && (
            <p>
              <Label>API Integrada: </Label>
              <a
                href={apiIntegration.url}
                target="_blank" 
                rel="external noopener noreferrer">
                {apiIntegration.name}
              </a>
            </p>
          )}
        </Info>
  
        <ButtonsWrapper>
  
          <ButtonWrapper buttonType="primary">
            <a
              href={deployURL}
              target="_blank"
              rel="external noopener noreferrer">
              Ver Online
            </a>
          </ButtonWrapper>
          <ButtonWrapper buttonType="secondary">
            <a
              href={sourceCodeURL}
              target="_blank"
              rel="external noopener noreferrer">
              Código Fuente
            </a>
          </ButtonWrapper>

        </ButtonsWrapper>
      </InfoWrapper>
    </ProjectSummaryStyled>
  );
}

export default ProjectSummary;