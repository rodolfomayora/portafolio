import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function SplashScreen () {
  const visibleStyle = styles.SplahScreen;
  const hiddenStyle = `${styles.SplahScreen} ${styles.loaded}`;

  const [splashStyle, setSpalshStyle] = useState<string>(visibleStyle);
  const [didLoad, setDidLoad] = useState<boolean>(false);
  useEffect(() => {
    const HTML = document.querySelector('html');
    HTML.style.overflow = 'hidden';

    const init = (): void => {
      const delayHidde = 2000;
      const delayRemove = 4000;

      window.setTimeout(() => {
        setSpalshStyle(hiddenStyle);
        HTML.style.overflow = 'auto';
      }, delayHidde);

      window.setTimeout(() => {
        setDidLoad(true);
      }, delayRemove);
    }

    window.addEventListener('load', init);

    () => {
      window.removeEventListener('load', init);
    }
  }, [])

  if (didLoad) return null;

  return (
    <div className={splashStyle}>
      <div className={styles.layer}>
        <span>Cargando...</span>
      </div>
    </div>
  );
}