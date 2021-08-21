import React, { FC } from 'react';

import Button from '../Button';
import ExternalLink from '../ExternalLink';
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
              <ExternalLink href={apiIntegration.url}>
                {apiIntegration.name}
              </ExternalLink>
            </p>
          )}

          {hasSampleData && (
            <p>
              <Label>API Integrada: </Label>
              <ExternalLink href={sampleDataFrom.url}>
                {sampleDataFrom.name}
              </ExternalLink>
            </p>
          )}
        </Info>
  
        <ButtonsWrapper>
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
        </ButtonsWrapper>
      </InfoWrapper>
    </ProjectSummaryStyled>
  );
}

export default ProjectSummary;