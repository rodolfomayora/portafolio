import styled, { css } from "styled-components";

import { colors, mixins } from '../../styles/config';

export const Main = styled.main`
  min-height: calc(100vh - 263px); /** 263px Footer Height */
`;

export const DecorationSection = styled.div`
  position: relative;
  z-index: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  padding-top: 100px;
  overflow: hidden;
  background: ${colors.transparent};

  ${mixins.medium(css`
    height: 400px;
  `)}
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  color: ${colors.darkGray};

  ${mixins.medium(css`
    font-size: 42px;
  `)}
`;

export const PageSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white2};

  ${mixins.large(css`
    padding-top: 100px;
    padding-bottom: 100px;
  `)}
`;