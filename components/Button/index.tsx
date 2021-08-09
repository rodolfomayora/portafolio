import React , { FC } from 'react';

import { ButtonProps } from './types';
import { ButtonStyled } from './styles';

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>
    {children}
  </ButtonStyled>
);

export default Button;