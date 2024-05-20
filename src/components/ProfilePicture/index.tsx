import Image from 'next/image';
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
          <Image className={styles.picture}
            src={props.src}
            alt={props.alt}
            height="100" width="100"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}