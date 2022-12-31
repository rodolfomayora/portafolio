/**
 * this componente ist not nescesary for NextJS 12' server components
 * is just for decoration
 */

import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const SplashScreen: FC = () => {
  const visibleStyle: string = styles.SplahScreen;
  const hiddenStyle: string = `${styles.SplahScreen} ${styles.loaded}`;

  const [splashStyle, setSpalshStyle] = useState<string>(visibleStyle);
  const [didLoad, setDidLoad] = useState<boolean>(false);
  useEffect(() => {
    const HTML = document.querySelector('html');
    HTML.style.overflow = 'hidden';

    const init = (): void => {
      const delayHidde: number = 2000;
      const delayRemove: number = 4000;

      window.setTimeout(() => {
        setSpalshStyle(hiddenStyle);
        HTML.style.overflow = 'auto';
      }, delayHidde);

      window.setTimeout(() => {
        setDidLoad(true);
      }, delayRemove);
    }

    init();
  },
  [])

  if (didLoad) return <></>;

  return (
    <div className={splashStyle}>
      <div className={styles.layer}>
        <span>Cargando...</span>
      </div>
    </div>
  );
}

export default SplashScreen;