import styled, { css } from "styled-components";

import { colors } from '../../styles/config';
import { ButtonStyledProps } from './types';
import ExternalLink from '../ExternalLink';

export const ButtonStyled = styled(ExternalLink)<ButtonStyledProps>`
  display: inline-block;
  padding: 0 16px;
  line-height: 38px;
  border: solid 2px ${colors.green};
  border-radius: 4px;
  
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
  text-decoration: none;
  
  background-color: ${colors.green};
  box-shadow: 0 2px 4px ${colors.shadow};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${colors.transparent};
    background-color: ${colors.green2};
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  ${({ outline }) => outline && css`
    color: ${colors.green};
    background-color: ${colors.transparent};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.green};
    }
  `}
`;