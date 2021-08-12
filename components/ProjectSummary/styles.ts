import styled, { css } from "styled-components";

import { mixins } from '../../styles/config';

export const ProjectSummaryStyled = styled.article`
  &:first-of-type ~ & { margin-top: 80px; }

  ${mixins.medium(css`
    display: flex;
    align-items: center;
    
    &:nth-of-type(2n - 1) > :first-child { margin-right: 20px; }

    &:nth-of-type(2n) {
      flex-direction: row-reverse;

      & > :first-child { margin-left: 25px; }
    }
  `)}
`;

export const MockupWrapperDesktop = styled.div`
  width: 0;
  height: 0;
  visibility: hidden;

  ${mixins.medium(css`
    width: auto;
    height: auto;
    visibility: visible;
    flex-basis: 50%;
  `)}
`;

export const MockupWrapperMobile = styled.div`
  overflow: hidden;

  ${mixins.medium(css`
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
    z-index: -99;
  `)}
`;

export const InfoWrapper = styled.div`
  & > :first-child ~ * {
    margin-top: 25px;
  }

  ${mixins.small(css`
    & > :first-child ~ * {
      margin-top: 20px;
    }
  `)}

  ${mixins.medium(css`
    flex-basis: 50%;
  `)}
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  
  ${mixins.medium(css`
    text-align: left;
    font-size: 28px;
  `)}
`;

export const Info = styled.div`
  line-height: 24px;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const ButtonsWrapper = styled.div`
  & > :first-child { margin-bottom: 25px; }

  ${mixins.small(css`
    display: flex;

    & > * { flex-basis: 50%; }

    & > :first-child {
      margin-right: 20px;
      margin-bottom: 0;
    }
  `)}
`;