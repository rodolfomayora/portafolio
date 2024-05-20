import Image from 'next/image';
import styles from './styles.module.scss';

type Props = {
  mockupFileName: string,
  alt: string,
}

export function MockupViewer ({ mockupFileName, alt }: Props) {
  const projectMockupPath = '/images/';
  const defaultMokupSource = `${projectMockupPath}${mockupFileName}`;
  const mediumMockupSource = `${projectMockupPath}medium_${mockupFileName}`;
  const alternativeText = `${alt} Mockup`;

  return (
    <div className={styles.MockupViewer}>
      <picture>
        <source
          type="image/webp"
          srcSet={`${defaultMokupSource}.webp`} />
        <source
          type="image/webp"
          media="(min-width:768px)"
          srcSet={`${defaultMokupSource}.webp`} />
        
        <source
          media="(min-width:768px)"
          srcSet={`${mediumMockupSource}.png`} />

        <Image className={styles.mockup}
          src={`${defaultMokupSource}.png`}
          alt={alternativeText}
          width="270" height="140"
          loading="lazy"
          decoding="auto"
        />
      </picture>
    </div>
  );
}