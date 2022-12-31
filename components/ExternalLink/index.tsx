import React , { FC } from 'react';
import ExternalLinkProps from './types';

const ExternalLink: FC<ExternalLinkProps> = ({ children, className, href }) => (
  <a
    className={className}
    href={href}
    rel="external noopener noreferrer"
    target="_blank">
    {children}
  </a>
);

export default ExternalLink;