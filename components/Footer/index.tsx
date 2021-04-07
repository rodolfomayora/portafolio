import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import Container from '../Container';
import NavigationLinks from '../NavigationLinks';
import { Github, Linkedin, Telegram } from '../../public/images/';

const Footer: FC = () => (
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
          <Github className={style.socialLink} />
          <Linkedin className={style.socialLink} />
          <Telegram className={style.socialLink} />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer;