import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import Container from '../Container';
import NavigationLinks from '../NavigationLinks';
import SocialLinks from '../SocialLinks';

const Footer: FC = () => {

  const date: Date = new Date;
  const currentYear: string = date.getFullYear().toString();

  return (
    <footer className={style.Footer}>
      <Container>
        <div className={style.footerWrapper}>
          <div className={style.myNameWrapper}>
            <Link href="/">
              <a className={style.myName}>
                RODOLFO<br />
                MAYORA<br />
                PEREDA
              </a>
            </Link>
          </div>
  
          <div className={style.navigationContainer}>
            <NavigationLinks />
          </div>
  
          <div className={style.socialWrapper}>
            <SocialLinks />
          </div>
        </div>
  
        <div className={style.footerBottom}>
          <small>
            &copy; <time dateTime={currentYear}>{currentYear}</time> - Rodolfo Mayora Pereda
          </small>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;