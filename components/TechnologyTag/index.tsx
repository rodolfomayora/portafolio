import { FC } from 'react';
import TecnologyTagProps from './types';
import styles from './styles.module.scss';

const TechologyTag: FC<TecnologyTagProps> = ({ name }) => (
  <div className={styles.technologyTag}>
    <div className={styles.content}>
      <div className={styles.text}>{name}</div>
    </div>
  </div>
);

export default TechologyTag;