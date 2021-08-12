import React , { FC } from 'react';

import {
  ProfilePictureStyled,
  PictureLayer1x1,
  PictureContent,
  Picture
} from './styles';

type ProfilePictureProps = {
  src: string,
  alt: string,
}

const ProfilePicture: FC<ProfilePictureProps> = props => (
  <ProfilePictureStyled>
    <PictureLayer1x1>
      <PictureContent>
        <Picture
          src={props.src}
          alt={props.alt}
          height="100" width="100" />
      </PictureContent>
    </PictureLayer1x1>
  </ProfilePictureStyled>
);

export default ProfilePicture;