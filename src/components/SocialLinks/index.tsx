import { Github, Linkedin, Telegram } from '../../../public/images';
import { socialLinks as links } from '../../data';
import { ExternalLink } from '#components/ExternalLink';
import styles from './styles.module.scss';

export function SocialLinks () {
  return (
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
}