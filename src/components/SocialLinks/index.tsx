import {
  GithubIcon,
  LinkedinIcon,
  GitlabIcon,
  DockerFlatIcon,
} from '#icons/svg';
import * as links from '#data/socialLinks';
import { ExternalLink } from '#components/ExternalLink';

export function SocialLinks () {
  return (
    <>
      <ExternalLink
        href={links.githubProfile}
        aria-label="github profile page"  
      >
        <GithubIcon />
      </ExternalLink>

      <ExternalLink
        href={links.gitlabProfile}
        aria-label="gitlab profile page"
      >
        <GitlabIcon />
      </ExternalLink>

      <ExternalLink
        href={links.dockerhubProfile}
        aria-label="dockerhub profile page"    
      >
        <DockerFlatIcon />
      </ExternalLink>
  
      <ExternalLink
        href={links.linkedInProfile}
        aria-label="linkedin profile page"  
      >
        <LinkedinIcon />
      </ExternalLink>
    </>
  );
}