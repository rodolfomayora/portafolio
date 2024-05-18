import { type Props as ButtonLinkProps, ButtonLink } from "../ButtonLink";
import styles from './styles.module.scss';

export type Props = ButtonLinkProps;

export function ButtonLinkOutlined ({ children, ...props}: Props) {

  return (
    <ButtonLink className={styles.ButtonLinkOutlined} {...props}>
      {children}
    </ButtonLink>
  );
}