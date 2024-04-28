import React , { FC } from 'react';
import ProfilePictureProps from './types';
import styles from './styles.module.scss';

const ProfilePicture: FC<ProfilePictureProps> = props => (
  <div className={styles.ProfilePictureStyled}>
    <div className={styles.pictureLayer1x1}>
      <div className={styles.pictureContent}>
        <img className={styles.picture}
          src={props.src}
          alt={props.alt}
          height="100" width="100" />
      </div>
    </div>
  </div>
);

export default ProfilePicture;