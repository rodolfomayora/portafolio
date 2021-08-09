import styled, { css } from 'styled-components';

import { colors, mixins } from '../../styles/config';
import Navigation from '../Navigation';

export const FooterStyled = styled.footer`
  padding-top: 50px;
  padding-bottom: 40px;
  background-color: ${colors.dark};
  color: ${colors.white};

  ${mixins.medium(css`
    padding-top: 60px;
    padding-bottom: 50px;
  `)}
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  
  & > :first-child ~ * { margin-top: 40px }; /** Items */

  ${mixins.medium(css`
    flex-direction: row;
    
    & > * { /** Items */
      flex-basis: 30%;
      flex-grow: 1;
    }
    
    & > :first-child ~ * { margin-top: 0 };
  `)}
`;

export const LinkToHomeWrapper = styled.div`
  text-align: center;

  ${mixins.medium(css`
    text-align: left;
  `)}
`;

export const LinkToHome = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 16px;
  color: ${colors.white};
  transition: color 0.3s linear;

  &:hover { color: ${colors.green3}; }
`;

export const InnerNavigation = styled(Navigation)`
  display: flex;
  justify-content: center;

  & > * { /** Navigation Links */
    color: ${colors.white};
    transition: color 0.3s linear;

    &:hover {
      color: ${colors.green3};
    }
  }

  & > * + * { margin-left: 20px; }
`;

export const SocialLinksWrapper = styled.div`
  svg {
    width: 22px;
    fill: ${colors.white};
    transition: fill 0.3s ease;

    &:hover {
      fill: ${colors.green3};
    }
  }

  ${mixins.medium(css`
    text-align: right;
  `)}
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: solid 1px ${colors.green3};
`;