import React, { FC, useState, useEffect } from 'react';
import style from './style.module.scss';

const SplashScreen: FC = () => {
  const visible: string = style.SplahScreen;
  const hidden: string = style.SplahScreen + ' ' + style.loaded;
  const [splashStyle, setSpalshStyle] = useState<string>(visible);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const init = (): void => {
      window.setTimeout(() => {
        setSpalshStyle(hidden);
      }, 2000);

      window.setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    }

    window.addEventListener('load', init);
  },
  [])

  return isLoading ? (
    <div className={splashStyle}>
      <div className={style.layer} />
    </div>
  ) : (
    <></>
  )
}

export default SplashScreen;