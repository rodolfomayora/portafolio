import React, { FC } from 'react';
import MainButtonWrapperProps from './type';
import style from './style.module.scss';

const MainButtonWrapper: FC<MainButtonWrapperProps> = ({ children }) => (
  <div className={style.MainButtonWrapper}>{children}</div>
);

export default MainButtonWrapper;