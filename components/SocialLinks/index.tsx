import React, { FC } from 'react';
import { Github, Linkedin, Telegram } from '../../public/images';
import { socialLinks as links } from '../../data';
import ExternalLink from '../ExternalLink';
import styles from './styles.module.scss';

const SocialLinks: FC = () => (
  <>
    <ExternalLink className={styles.ExternalLink}
      href={links.githubProfile}>
      <Github />
    </ExternalLink>

    <ExternalLink className={styles.ExternalLink}
      href={links.linkedInProfile}>
      <Linkedin />
    </ExternalLink>

    <ExternalLink className={styles.ExternalLink}
      href={links.telegramProfile}>
      <Telegram />
    </ExternalLink>
  </>
);

export default SocialLinks;