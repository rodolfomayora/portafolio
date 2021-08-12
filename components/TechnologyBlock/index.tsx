import React, { FC } from 'react';

import TechnologyBlockProps from './types';
import {
  Label,
  Logo,
  LogoWrapper,
  TechnologyBlockStyled
} from './styles';

const TecnologyBlock: FC<TechnologyBlockProps> = ({ name, pathIcon }) => (
  <TechnologyBlockStyled>
    <LogoWrapper>
      <Logo
        src={pathIcon}
        alt={name + ' Icon'}
        width="40"
        height="40" />
    </LogoWrapper>
    <Label>{name}</Label>
  </TechnologyBlockStyled>
);

export default TecnologyBlock;