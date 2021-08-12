import styled, { css } from "styled-components";

import { colors } from '../../styles/config';
import { ButtonStyledProps } from './types';
import { default as ELink} from '../ExternalLink';

const buttonHeight: number = 42;
const borderWidth: number = 2;
const outlineButtonHeight: number = buttonHeight - (borderWidth * 2);

const ButtonStyles = css<ButtonStyledProps>`
  display: inline-block;
  padding: 0 10px;
  line-height: ${buttonHeight}px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
  text-decoration: none;
  
  background-color: ${colors.green};
  box-shadow: 0 2px 4px ${colors.shadow};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover { background-color: ${colors.green2}; }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  ${({ outline }) => outline && css`
    line-height: ${outlineButtonHeight}px;
    border:
      solid
      ${borderWidth}px
      ${colors.green};
    color: ${colors.green};
    background-color: ${colors.transparent};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.green};
    }
  `}
`;

export const ButtonStyled = styled.button`
  ${ButtonStyles}
`;

export const LinkButtonStyled = styled.a`
  ${ButtonStyles}
`;

export const ExternalLinkStyled = styled(ELink)`
  ${ButtonStyles}
`;