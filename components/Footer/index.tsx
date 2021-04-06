import React, { FC } from 'react';
import style from './style.module.scss';
import Container from '../Container';
import { Github, Linkedin, Telegram } from '../../public/images/';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <Container>
      <div className={style.footerWrapper}>
        <div className={style.myName}>
          RODOLFO<br />
          MAYORA<br />
          PEREDA
        </div>

        <div className={style.navigationContainer}>
          <span className={style.navigationLink}>Inicio</span>
          <span className={style.navigationLink}>Portafolio</span>
          <span className={style.navigationLink}>Perfil</span>
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