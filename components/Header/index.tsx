import React, { FC, useState, useEffect } from 'react';

import Container from '../Container';
import HeaderProps from './types';

import Navigation from '../Navigation';
import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ currentPage }) => {
  
  const [didScroll, setDidScroll] = useState<boolean>(false);
  useEffect(() => {
    let isScrolling: boolean = false;
    let isInTop: boolean = true;

    const didUserScroll: boolean = window.pageYOffset > 0;
    if (didUserScroll) setDidScroll(true);

    const intervalWatcher: number = window.setInterval(():void => {
      if (isScrolling) {
        isScrolling = false;
        const scrollYOffset: number = window.pageYOffset;
        const initialPoint: number = 0;
        const isAtInitialPoint: boolean = scrollYOffset === initialPoint;
        const isNoAtInitialPoint: boolean = scrollYOffset > 0 && isInTop;

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
    'Inicio'    : styles.first,
    'Portafolio': styles.second, 
    'Perfil'    : styles.third,
  }

  const optionIndex = navigationIndex[currentPage];

  const navigationStyle = `${styles.navigationBar} ${optionIndex}`;

  return (
    <div className={`
      ${styles.Header}
      ${didScroll ? styles.scroll : ''}  
    `}>
      <Container>
        <div className={styles.headerContent}>
          <Navigation className={navigationStyle} />
        </div>
      </Container>
    </div>
  );
}

export default Header;