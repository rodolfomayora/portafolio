import styled, { css, keyframes } from "styled-components";

import { colors } from '../../styles/config';
import { LoaderProps } from './types';

const rotation = keyframes`
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
`;

export const LoaderStyled = styled.div<LoaderProps>`
  width: 40px;
  height: 40px;
  border: 4px solid ${colors.gray};
  border-left-color: ${colors.white};
  border-radius: 50%;
  will-change: transform;
  animation: ${rotation} 1s linear 0s infinite;

  ${({ small }) => small && css`
    width: 20px;
    height: 20px;
    border-width: 2px;
  `}

  ${({ dark }) => dark && css`
    border-color: ${colors.lightGray};
    border-left-color: ${colors.dark};
  `}
`;