// import Image from 'next/image'
import type { technologyBlock } from '#/types/technologyBlock';
import styles from './styles.module.scss';

type Props = technologyBlock;

export function TechnologyBlock ({ name, imageSource }: Props) {
  return (
    <div className={styles.TechnologyBlock}>
      <div className={styles.logoWrapper}>
        {/* <Image */}
        <img
          className={styles.logo}
          src={imageSource}
          alt={name + ' Icon'}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.label}>{name}</div>
    </div>
  );
}