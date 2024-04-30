import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  DockerFlatIcon,
} from '#icons/svg';
import * as links from '#data/socialLinks';
import { ExternalLink } from '#components/ExternalLink';
import styles from './styles.module.scss';

export function SocialLinks () {
  return (
    <>
      <ExternalLink className={styles.ExternalLink}
        href={links.githubProfile}
        aria-label="github profile page"  
      >
        <GithubIcon />
      </ExternalLink>

      <ExternalLink className={styles.ExternalLink}
        href={links.dockerhubProfile}
        aria-label="dockerhub profile page"    
      >
        <DockerFlatIcon />
      </ExternalLink>
  
      <ExternalLink className={styles.ExternalLink}
        href={links.linkedInProfile}
        aria-label="linkedin profile page"  
      >
        <LinkedinIcon />
      </ExternalLink>
  
      <ExternalLink className={styles.ExternalLink}
        href={links.telegramProfile}
        aria-label="telegram contact link"
      >
        <TelegramIcon />
      </ExternalLink>
    </>
  );
}