import React , { FC } from 'react';

type ExternalLinkProps = {
  className?: string,
  href: string
}

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