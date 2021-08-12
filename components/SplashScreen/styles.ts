import styled, { css, keyframes} from "styled-components";

import { colors } from '../../styles/config';

type SplashProps = {
  hasSiteLoaded: boolean,
}

const verticalMove = keyframes`
  0% { transform: translate(-50%, calc(-50% + 25px)); }
  50% { transform: translate(-50%, calc(-50% - 25px)); }
  100% { transform: translate(-50%, calc(-50% + 25px)); }
`;

export const SplashScreenStyled = styled.div<SplashProps>`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.green};
  
  will-change: opacity;
  transition: opacity 1s ease 1s; /** Two seconds in total */

  ${({ hasSiteLoaded }) => hasSiteLoaded && css`
    opacity: 0;
  `}
`;

export const Circle = styled.div<SplashProps>`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 25px));
  
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 0 0 0 50px ${colors.white2};
  background-color: ${colors.white2} ;

  will-change:
    opacity,
    transform,
    box-shadow;
  
  animation: ${verticalMove} 2s ease-in-out 0s infinite;

  transition:
    box-shadow 0.5s ease 0.5s; /** One second in total */
  
  ${({ hasSiteLoaded }) => hasSiteLoaded && css`
    animation-play-state: paused;
    box-shadow: 0 0 0 140vmax ${colors.white2};
  `}
`;