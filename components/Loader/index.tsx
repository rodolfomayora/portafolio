import React , { FC } from 'react';
import { LoaderProps } from './types';
import styles from './styles.module.scss';

const Loader: FC<LoaderProps> = ({ small, dark }) => {
  const loaderStyle = `
    ${styles.Loader}
    ${small ? styles.small : ''}
    ${dark ? styles.dark : ''}
  `

  return <div className={loaderStyle} />;
}

export default Loader;