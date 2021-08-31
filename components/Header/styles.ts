import styled from 'styled-components';

import { colors } from '../../styles/config';
import { default as NavBar } from '../Navigation';
import { HeaderStyledProps, NavigationProps } from './types';

export const HeaderStyled = styled.header<HeaderStyledProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  padding-top: var(--padding-top, 30px);
  min-height: 50px;
  font-weight: 700;
  background-color: var(--background, ${colors.transparent});
  box-shadow: var(--shadow, none);
  will-change:
    background-color,
    box-shadow;
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: margin-top 0.3s ease;
`;

export const Navigation = styled(NavBar)<NavigationProps>`
  & > * { /** Navigation Links */
    position: relative;
    color: ${colors.gray};

    &:before {
      content: '';
      position: absolute;
      z-index: 10;
      height: 5px;
      bottom: -12px;
      left: 0;
      width: 0;
      background: linear-gradient(
        90deg,
        ${colors.lightGradient1},
        ${colors.lightGradient2}
      );

      transition: width 0.2s linear;
    }

    &:hover:before {
      width: 100%;
    }
  }
        
  & > * + * { margin-left: 20px; }

  & > :nth-of-type(${({ optionIndex }) => optionIndex }) {
    &:after {
      content: '';
      position: absolute;
      z-index: 10;
      height: 5px;
      bottom: -12px;
      left: 0;
      right: 0;
      background: linear-gradient(
        90deg,
        ${colors.lightGradient1},
        ${colors.lightGradient2}
      );
    }
  }
`;

// export const ToggleTheme = styled.div`
//   display: block;
//   width: 40px;
//   height: 40px;
//   background: $green;
//   border-radius: 50%;

//   margin-left: auto;
// `;