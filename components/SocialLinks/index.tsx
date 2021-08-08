import React, { FC } from 'react';

import { Github, Linkedin, Telegram } from '../../public/images';
import { ExternalLink } from './styles';

const SocialLinks: FC = () => (
  <>
    <ExternalLink href="https://github.com/rodolfomayora">
      <Github />
    </ExternalLink>

    <ExternalLink href="https://www.linkedin.com/in/rodolfo-mayora-pereda">
      <Linkedin />
    </ExternalLink>

    <ExternalLink href="https://t.me/RodolfoMayoraPereda">
      <Telegram />
    </ExternalLink>
  </>
);

export default SocialLinks;