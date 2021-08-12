import React, { FC } from 'react';

import { Github, Linkedin, Telegram } from '../../public/images';
import { socialLinks as links } from '../../data';
import { ExternalLink } from './styles';

const SocialLinks: FC = () => (
  <>
    <ExternalLink href={links.githubProfile}>
      <Github />
    </ExternalLink>

    <ExternalLink href={links.linkedInProfile}>
      <Linkedin />
    </ExternalLink>

    <ExternalLink href={links.telegramProfile}>
      <Telegram />
    </ExternalLink>
  </>
);

export default SocialLinks;