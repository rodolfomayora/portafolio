import styled, { css } from "styled-components";

import { colors, mixins } from '../../styles/config';

export const TechnologyBlockStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 12px 12px;
  background-color: ${colors.white2};
  overflow: hidden;
  border-left: solid 6px ${colors.green};
  box-shadow: 0 2px 4px ${colors.shadow};

  ${mixins.small(css`
    flex-direction: row;
  `)}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 40px;
  height: auto;
  width: auto;
`;

export const Label = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
  margin-top: 12px;

  ${mixins.small(css`
    margin-top: 0;
  `)}
`;