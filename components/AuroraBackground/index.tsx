import React, { FC } from 'react';

import {
  AuroraBrackgroundStyled,
  Layer,
  Shape,
} from './styles';
/**
 * this component needs to be into a component with the next porperties:
 * position: relative;
 * z-index: 0;
 * background: *transparent*
 */
  
const AuroraBakcground: FC = () => (
  <AuroraBrackgroundStyled>
    <Layer>
      <Shape />
      <Shape />
      <Shape />
      <Shape />
      <Shape />
    </Layer>
  </AuroraBrackgroundStyled>
);

export default AuroraBakcground;