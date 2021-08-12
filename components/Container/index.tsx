import React, { FC } from 'react';

import { ContainerStyled, ContainerWrapper} from './styles';

const Container: FC = ({ children }) => (
  <ContainerStyled>
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  </ContainerStyled>
);

export default Container;