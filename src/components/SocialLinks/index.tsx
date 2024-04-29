import { Github, Linkedin, Telegram, DockerFlat } from '../../../public/images';
import { socialLinks as links } from '../../data';
import { ExternalLink } from '#components/ExternalLink';
import styles from './styles.module.scss';

export function SocialLinks () {
  return (
    <>
      <ExternalLink className={styles.ExternalLink}
        href={links.githubProfile}
        aria-label="github profile page"  
      >
        <Github />
      </ExternalLink>

      <ExternalLink className={styles.ExternalLink}
        href={links.dockerhubProfile}
        aria-label="dockerhub profile page"    
      >
        <DockerFlat />
      </ExternalLink>
  
      <ExternalLink className={styles.ExternalLink}
        href={links.linkedInProfile}
        aria-label="linkedin profile page"  
      >
        <Linkedin />
      </ExternalLink>
  
      <ExternalLink className={styles.ExternalLink}
        href={links.telegramProfile}
        aria-label="telegram contact link"
      >
        <Telegram />
      </ExternalLink>
    </>
  );
}