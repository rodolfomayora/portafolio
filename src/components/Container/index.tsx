import type { ReactElement } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactElement | ReactElement[]
}

const Container = ({ children }: Props) => (
  <div className={styles.Container}>
    <div className={styles.containerWrapper}>
      {children}
    </div>
  </div>
);

export default Container;