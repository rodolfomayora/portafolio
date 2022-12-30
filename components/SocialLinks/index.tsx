import React, { FC } from 'react';
import { Github, Linkedin, Telegram } from '../../public/images';
import { socialLinks as links } from '../../data';
import styles from './styles.module.scss';

const SocialLinks: FC = () => (
  <>
    <a className={styles.ExternalLink}
      href={links.githubProfile}>
      <Github />
    </a>

    <a className={styles.ExternalLink}
      href={links.linkedInProfile}>
      <Linkedin />
    </a>

    <a className={styles.ExternalLink}
      href={links.telegramProfile}>
      <Telegram />
    </a>
  </>
);

export default SocialLinks;