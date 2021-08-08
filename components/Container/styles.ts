import styled, { css } from "styled-components";

import { mixins } from '../../styles/config';

export const ContainerStyled = styled.div`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;

  ${mixins.medium(css`
    padding-left: 50px;
    padding-right: 50px;
  `)}
`;

export const ContainerWrapper = styled.div`
  height: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;