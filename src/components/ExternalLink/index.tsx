import type { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode,
  href: string
  className?: string,
  ["aria-label"]?: string, 
}

export function ExternalLink ({ children, className, href }: Props) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="external noopener noreferrer"
    >
      {children}
    </Link>
  );
}