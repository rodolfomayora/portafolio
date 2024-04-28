import React, { FC } from 'react';
import TechnologyBlockProps from './types';
import styles from './styles.module.scss';

const TecnologyBlock: FC<TechnologyBlockProps> = ({ name, pathIcon }) => (
  <div className={styles.TechnologyBlock}>
    <div className={styles.logoWrapper}>
      <img
        className={styles.logo}
        src={pathIcon}
        alt={name + ' Icon'}
        width={100}
        height={100}
      />
    </div>
    <div className={styles.label}>{name}</div>
  </div>
);

export default TecnologyBlock;