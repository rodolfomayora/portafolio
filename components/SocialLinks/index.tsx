import React, { FC } from 'react';
import { Github, Linkedin, Telegram } from '../../public/images';
import style from './style.module.scss';

const SocialLinks: FC = () => (
  <>
    <a className={style.linkWrapper}
      href="https://github.com/rodolfomayora"
      target="_blank"
      rel="external noopener noreferrer"
    >
      <Github className={style.link} />
    </a>
    <a className={style.linkWrapper}
      href="https://www.linkedin.com/in/rodolfo-mayora-pereda"
      target="_blank"
      rel="external noopener noreferrer"
    >
      <Linkedin className={style.link} />
    </a>
    <a className={style.linkWrapper}
      href="https://t.me/RodolfoMayoraPereda"
      target="_blank"
      rel="external noopener noreferrer"
    >
      <Telegram className={style.link} />
    </a>
  </>
);

export default SocialLinks;