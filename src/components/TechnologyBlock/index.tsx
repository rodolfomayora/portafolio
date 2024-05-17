import Image from 'next/image'
import styles from './styles.module.scss';

export type Props = {
  name: string,
  imageSource: string
}

export function TechnologyBlock ({ name, imageSource }: Props) {
  return (
    <div className={styles.TechnologyBlock}>
      <div className={styles.logoWrapper}>
        <Image className={styles.logo}
          src={imageSource}
          alt={name + " Icon"}
          width={100}
          height={100}
          loading="lazy"
          decoding="auto"
        />
      </div>
      <div className={styles.label}>{name}</div>
    </div>
  );
}