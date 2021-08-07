import React, { FC } from 'react';

import TecnologyBlockProps from './types';
import {
  Label,
  Logo,
  LogoWrapper,
  TecnologyBlockStyled
} from './styles';

const TecnologyBlock: FC<TecnologyBlockProps> = ({ name, pathIcon }) => (
  <TecnologyBlockStyled>
    <LogoWrapper>
      <Logo
        src={pathIcon}
        alt={name + ' Icon'}
        width="40"
        height="40" />
    </LogoWrapper>
    <Label>{name}</Label>
  </TecnologyBlockStyled>
);

export default TecnologyBlock;