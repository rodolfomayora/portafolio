import styled, { css } from "styled-components";

import { mixins } from '../../styles/config';

export const MockupLayer = styled.div`
  position: relative;
  padding-top: 50%;

  ${mixins.medium(css`
    position: relative;
    padding-top: 60%;
  `)}
`;

export const Mockup = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;