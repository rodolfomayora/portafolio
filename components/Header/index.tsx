import React, { FC, useState, useEffect } from 'react';
import HeaderProps from './type';
import Container from '../Container';
import NavigationLinks from '../NavigationLinks';
import style from './style.module.scss';


const Header: FC<HeaderProps> = ({ currentPage }) => {
  
  const [headerStyle, setHeaderStyle] = useState<string>(style.Header);
  useEffect(() => {
    const initHeaderStyle: string = style.Header;
    const scrollHeaderStyle: string = style.Header + ' ' + style.scroll;
    let isScrolling: boolean = false;
    let isInTop: boolean = true;

    const intervalWatcher: number = window.setInterval(():void => {
      if (isScrolling) {
        isScrolling = false;
        
        let scrollOffset: number = window.pageYOffset;

        if (scrollOffset === 0) {
          isInTop = true;
          setHeaderStyle(initHeaderStyle);
        }

        if (scrollOffset > 0 && isInTop) {
          isInTop = false;
          setHeaderStyle(scrollHeaderStyle)
        }
      }
    }, 200)

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

  const setStyle = (page: string): string => {
    switch(page) {
      case 'Inicio':
        return style.navigationBar + ' ' + style.home;
      case 'Portafolio':
        return style.navigationBar + ' ' + style.portfolio;
      case 'Perfil':
        return style.navigationBar + ' ' + style.profile;
      default:
        return style.navigationBar;
    }
  }

  const navStyle: string = setStyle(currentPage);

  return (
    <header className={headerStyle}>
      <Container>
        <div className={style.headerContainer}>
          <nav className={navStyle}>
            <NavigationLinks />
          </nav>

          {/* <span className={style.toggle}></span> */}
        </div>
      </Container>
    </header>
  );
}

export default Header;