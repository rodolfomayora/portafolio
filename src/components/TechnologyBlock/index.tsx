import type { ComponentProps } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

type NextImageProps = ComponentProps<typeof Image>;

type Props = {
  name: string,
  src: string,
  loading: NextImageProps['loading'],
  decoding: NextImageProps['decoding'],
}

export function TechnologyBlock ({ name, src, loading, decoding }: Props) {
  return (
    <div className={styles.TechnologyBlock}>
      <div className={styles.logoWrapper}>
        <Image className={styles.logo}
          src={src}
          alt={name + " Icon"}
          width="100" height="100"
          loading={loading}
          decoding={decoding}
        />
      </div>
      <div className={styles.label}>{name}</div>
    </div>
  );
}