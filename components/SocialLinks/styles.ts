import styled from "styled-components";

import { colors } from '../../styles/config';
import { default as Link } from '../ExternalLink';

export const ExternalLink = styled(Link)`
  &:first-of-type ~ & { margin-left: 30px; }

  svg {
    width: 20px;
    fill: ${colors.black};
  }
`;
