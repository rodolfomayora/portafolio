import { useState, useEffect } from 'react';
import { Container } from '#components/Container';
import { Navigation } from '#components/Navigation';
import { LocaleSelect } from '#components/LocaleSelect';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

type Props = {
  currentPage: string,
}

export function Header ({ currentPage }: Props) {
  const { t } = useLocaleDictionary();
  
  const [didScroll, setDidScroll] = useState<boolean>(false);
  useEffect(() => {
    let isScrolling = false;
    let isInTop = true;

    const didUserScroll = window.pageYOffset > 0;
    if (didUserScroll) setDidScroll(true);

    const intervalWatcher = window.setInterval(():void => {
      if (isScrolling) {
        isScrolling = false;
        const scrollYOffset = window.pageYOffset;
        const initialPoint = 0;
        const isAtInitialPoint = scrollYOffset === initialPoint;
        const isNoAtInitialPoint = scrollYOffset > 0 && isInTop;

        if (isAtInitialPoint) {
          isInTop = true;
          setDidScroll(false);
        }

        if (isNoAtInitialPoint) {
          isInTop = false;
          setDidScroll(true);
        }
      }
    }, 200);

    const setScrollTrue = ():void => {
      isScrolling = true;
    };

    document.addEventListener('scroll', setScrollTrue);

    return () => {
      window.clearInterval(intervalWatcher);
      document.removeEventListener('scroll', setScrollTrue);
    }
  },
  [])

  const navigationIndex = {
    // 'Inicio'     : styles.first,
    [t.home]     : styles.first,
    // 'Portafolio': styles.second, 
    [t.portfolio]: styles.second, 
    // 'Perfil'  : styles.third,
    [t.profile]  : styles.third,
  }

  const optionIndex = navigationIndex[currentPage];
  const navigationStyle = `${styles.navigationBar} ${optionIndex}`;

  return (
    <div className={styles.Header} data-did-scroll={didScroll}>
      <Container>
        <div className={styles.headerContent}>
          <Navigation className={navigationStyle}/>
          <LocaleSelect />
        </div>
      </Container>
    </div>
  );
}