import styles from './styles.module.scss';

type Props = {
  mockupFileName: string,
  title: string,
}

export function MockupViewer ({ mockupFileName, title }: Props) {
  // const projectMockupPath = '/images/static/';
  const projectMockupPath = '/images/';
  const defaultMokupSource = `${projectMockupPath}${mockupFileName}`;
  const mediumMockupSource = `${projectMockupPath}medium_${mockupFileName}`;
  const alternativeText = `${title} Mockup`;

  return (
    <div>
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

          <img className={styles.mockup}
            src={`${defaultMokupSource}.png`}
            alt={alternativeText}
            width="270" height="140" />
        </picture>
      </div>
    </div>
  );
}