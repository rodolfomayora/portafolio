import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

import { base, typography } from './base';

export default createGlobalStyle`
  // Vendors
  ${normalize}

  // Base
  ${typography}
  ${base}
`;