import type { ComponentProps } from 'react';
import { ButtonLink } from "../ButtonLink";
import styles from './styles.module.scss';

type Props = ComponentProps<typeof ButtonLink>;

export function ButtonLinkOutlined ({ children, ...props}: Props) {

  return (
    <ButtonLink className={styles.ButtonLinkOutlined} {...props}>
      {children}
    </ButtonLink>
  );
}