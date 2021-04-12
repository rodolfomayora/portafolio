import React, { FC } from 'react';
import style from './style.module.scss';

/**
 * this component needs to be into a component with the next porperties:
 * position: relative;
 * z-index: 0;
 * background: *transparent*
 */
  
const AuroraBakcground: FC = () => (
  <div className={style.AuroraBackground}>
    <div className={style.layer}>
      <div className={style.shape1}></div>
      <div className={style.shape2}></div>
      <div className={style.shape3}></div>
      <div className={style.shape4}></div>
      <div className={style.shape5}></div>
    </div>
  </div>
);

export default AuroraBakcground;