import { FC } from 'react';
import TecnologyTagProps from './types';
import styles from './styles.module.scss';

const TechologyTag: FC<TecnologyTagProps> = ({ name }) => (
  <div className={styles.technologyTag}>
    {name}
  </div>
);

export default TechologyTag;