import React, { FC } from 'react';
import TecnologyBlockProps from './type';
import style from './style.module.scss';

const TecnologyBlock: FC<TecnologyBlockProps> = ({ name, pathIcon }) => (
  <div className={style.TecnologyBlock}>
    <div className={style.brandLogo}>
      <img src={pathIcon} alt={name + ' Icon'}/>
    </div>
    <span className={style.label}>{name}</span>
  </div>
)

export default TecnologyBlock;