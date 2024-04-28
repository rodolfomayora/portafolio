import React , { FC } from 'react';
import Link from 'next/link';
import ExternalLinkProps from './types';

const ExternalLink: FC<ExternalLinkProps> = ({ children, className, href }) => (
  <Link
    className={className}
    href={href}
    rel="external noopener noreferrer"
    target="_blank">
    {children}
  </Link>
);

export default ExternalLink;