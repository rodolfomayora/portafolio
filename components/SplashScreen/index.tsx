import { FC, useEffect, useState } from 'react';

/**
 * CSS Modules it is implemented instead of Styled-Componentes because 
 * it works as a spected way when the client recieve de main page
 */
import styles from './styles.module.scss';

const SplashScreen: FC = () => {
  const visibleStyle: string = styles.SplahScreen;
  const hiddenStyle: string = `${styles.SplahScreen} ${styles.loaded}`;

  const [splashStyle, setSpalshStyle] = useState<string>(visibleStyle);
  const [didLoad, setDidLoad] = useState<boolean>(false);
  useEffect(() => {
    const init = (): void => {
      const delayHidde: number = 2000;
      const delayRemove: number = 4000;

      window.setTimeout(() => {
        setSpalshStyle(hiddenStyle);
      }, delayHidde);

      window.setTimeout(() => {
        setDidLoad(true)
      }, delayRemove);
    }

    window.addEventListener('load', init);

    return () => window.removeEventListener('load', init);
  },
  [])

  if (didLoad) return <></>;

  return (
    <div className={splashStyle}>
      <div className={styles.layer} />
    </div>
  );
}

export default SplashScreen;