import React, { FC } from 'react';
import styles from './styles.module.scss';

const Container: FC = ({ children }) => (
  <div className={styles.Container}>
    <div className={styles.containerWrapper}>
      {children}
    </div>
  </div>
);

export default Container;