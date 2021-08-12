import { css, CSSProp } from 'styled-components';

import breakpoints from './breakpoints';

type ResponsiveMixin = (styles: CSSProp) => CSSProp;

const generateResponsiveMixin = (breakpoint: string): ResponsiveMixin => {
  return styles => css`
    @media screen and (min-width: ${breakpoint}) {
      ${styles}
    }
  `;
}

const small: ResponsiveMixin = generateResponsiveMixin(breakpoints.small);

const medium: ResponsiveMixin = generateResponsiveMixin(breakpoints.medium);

const large: ResponsiveMixin = generateResponsiveMixin(breakpoints.large);

const extraLarge: ResponsiveMixin = generateResponsiveMixin(breakpoints.extraLarge);

export default {
  small,
  medium,
  large,
  extraLarge,
}