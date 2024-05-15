import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export type Props = ComponentProps<typeof Link> & {
  children: ReactNode,
  href: string,
}

export function ButtonLink ({ children, href, ...props }: Props) {
  const isExternalLink = href.startsWith('http');
  
  if (isExternalLink) return (
    <a className={styles.ButtonLink}
      href={href}
      target="_blank"
      rel="external noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );

  return (
    <Link className={styles.ButtonLink}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}