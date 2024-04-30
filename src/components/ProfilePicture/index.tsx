import styles from './styles.module.scss';

type Props = {
  src: string,
  alt: string,
}

export function ProfilePicture (props: Props) {
  return (
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
}

export default ProfilePicture;