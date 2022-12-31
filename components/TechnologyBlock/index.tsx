import React, { FC } from 'react';
import TechnologyBlockProps from './types';
import styles from './styles.module.scss';

const TecnologyBlock: FC<TechnologyBlockProps> = ({ name, pathIcon }) => (
  <div className={styles.TechnologyBlock}>
    <div className={styles.logoWrapper}>
      <img
        className={styles.logo}
        src={pathIcon}
        alt={name + ' Icon'} />
    </div>
    <div className={styles.label}>{name}</div>
  </div>
);

export default TecnologyBlock;