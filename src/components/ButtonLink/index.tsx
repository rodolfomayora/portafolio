import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { ExternalLink } from '#components/ExternalLink';
import styles from './styles.module.scss';

export type Props = ComponentProps<typeof Link> & {
  children: ReactNode,
  href: string,
}

export function ButtonLink ({ children, href, ...props }: Props) {
  const isExternalLink = href.startsWith('http');
  
  if (isExternalLink) return (
    <ExternalLink className={styles.ButtonLink}
      href={href}
      {...props}
    >
      {children}
    </ExternalLink>
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