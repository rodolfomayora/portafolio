import type { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<'a'> & {
  children: ReactNode,
  href: string
}

export function ExternalLink ({ children, href, ...props }: Props) {
  return (
    <a href={href}
      target="_blank"
      rel="external noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}