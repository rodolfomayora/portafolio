import styles from './styles.module.scss';

type Props = {
  mockupFileName: string,
  title: string,
}

export function MockupViewer ({ mockupFileName, title }: Props) {
  const projectMockupPath = '/images/static/';
  const defaultMokupSource = `${projectMockupPath}${mockupFileName}`;
  const mediumMockupSource = `${projectMockupPath}medium_${mockupFileName}`;
  const mediumBreakpointSource = `(min-width: '768px')`;
  const alternativeText = `${title} Mockup`;

  return (
    <div>
      <div className={styles.MockupViewer}>
        <picture>
          <source
            media={mediumBreakpointSource}
            srcSet={mediumMockupSource} />
          <img className={styles.mockup}
            src={defaultMokupSource}
            alt={alternativeText}
            width="270" height="140" />
        </picture>
      </div>
    </div>
  );
}