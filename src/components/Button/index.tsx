import type { ComponentProps, ReactNode } from 'react';
import styles from './styles.module.scss';

export type Props = ComponentProps<'button'> & {
  children: ReactNode,
}

export function Button ({ children, ...props }: Props) {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
}