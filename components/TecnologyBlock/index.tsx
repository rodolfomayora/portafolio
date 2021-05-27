import React, { FC } from 'react';
import TecnologyBlockProps from './type';
import style from './style.module.scss';

const TecnologyBlock: FC<TecnologyBlockProps> = ({ name, pathIcon }) => (
  <div className={style.TecnologyBlock}>
    <div className={style.brandLogoWrapper}>
      <img className={style.logo}
        src={pathIcon}
        alt={name + ' Icon'}
        width="40"
        height="40"  
      />
    </div>

    <span className={style.label}>{name}</span>
  </div>
)

export default TecnologyBlock;