import React , { FC } from 'react';
import Link from 'next/link';
import ExternalLink from '../ExternalLink';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

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
  const buttonStyle = `
    ${styles.Button}
    ${fullWidth ? styles.fullwidth : ''}
    ${outline ? styles.outline : '' }
    ${className ? className : '' }
  `

  if (mustBeExternalLink) return (
    <ExternalLink
      className={buttonStyle}
      href={href}>
      {children}
    </ExternalLink>
  );

  if (mustBeInnerLink) return (
    <Link className={buttonStyle} href={href}>
      {children}
    </Link>
  );

  return (
    <button
      className={buttonStyle}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;