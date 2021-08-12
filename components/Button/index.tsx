import React , { FC } from 'react';
import Link from 'next/link';

import { ButtonProps } from './types';
import {
  ButtonStyled,
  ExternalLinkStyled,
  LinkButtonStyled
} from './styles';

const Button: FC<ButtonProps> = props => {

  const {
    as,
    children,
    className,
    disabled,
    fullWidth,
    href,
    outline,
    type,
    onClick,
  } = props;

  const mustBeExternalLink: boolean = as === 'externalLink';
  const mustBeInnerLink: boolean = as === 'innerLink';

  if (mustBeExternalLink) return (
    <ExternalLinkStyled
      href={href}
      fullWidth={fullWidth}
      outline={outline}>
      {children}
    </ExternalLinkStyled>
  );

  if (mustBeInnerLink) return (
    <Link href={href}>
      <LinkButtonStyled
        fullWidth={fullWidth}
        outline={outline}>
        {children}
      </LinkButtonStyled>
    </Link>
  );

  return (
    <ButtonStyled
      className={className}
      disabled={disabled}
      fullWidth={fullWidth}
      outline={outline}
      type={type}
      onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;