import { FC } from 'react';
import TecnologyTagProps from './types';
import styles from './styles.module.scss';

const TechologyTag: FC<TecnologyTagProps> = ({ name, id }) => (
  <div className={styles.technologyTag} key={id}>
    {name}
  </div>
);

export default TechologyTag;