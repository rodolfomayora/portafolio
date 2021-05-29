import React, { FC } from 'react';
import ButtonWrapperProps from './type';
import style from './style.module.scss';

const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, buttonType }) => {

  const buttonStyle: object = {
    primary: `${style.ButtonWrapper} ${style.primary}`,
    secondary: `${style.ButtonWrapper}  ${style.secondary}`
  }

  return (
    <div className={buttonStyle[buttonType]}>
      {children}
    </div>
  );
}

export default ButtonWrapper;