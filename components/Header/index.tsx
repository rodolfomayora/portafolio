import React, { CSSProperties, FC, useState, useEffect } from 'react';

import Container from '../Container';
import { colors } from '../../styles/config';
import { HeaderProps } from './types';
import {
  HeaderContent,
  HeaderStyled,
  Navigation,
} from './styles';

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
      clearInterval(intervalWatcher);
      document.removeEventListener('scroll', setScrollTrue);
    }
  },
  [])

  const navigationIndex = {
    'Inicio'    : 1,
    'Portafolio': 2, 
    'Perfil'    : 3,
  }

  const optionIndex = navigationIndex[currentPage];

  const scrollCustomProperties = {
    '--padding-top': 0,
    '--background': colors.white,
    '--shadow': `0 0 5px ${colors.shadow}`
  }

  const scrolledStyle = didScroll ? scrollCustomProperties : {};

  return (
    <HeaderStyled style={scrolledStyle}>
      <Container>
        <HeaderContent>
          <Navigation optionIndex={optionIndex} />
          {/* <span className={style.toggle} /> */}
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
}

export default Header;