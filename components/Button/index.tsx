import React , { FC } from 'react';

import { ButtonProps } from './types';
import { ButtonStyled } from './styles';

const Button: FC<ButtonProps> = props => {

  const { children, fullWidth, href, outline } = props;

  return (
    <ButtonStyled
      href={href}
      fullWidth={fullWidth}
      outline={outline}>
      {children}
    </ButtonStyled>
  );
}

export default Button;