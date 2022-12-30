import React , { FC } from 'react';

import breakpoints from '../../styles/config/breakpoints';
import MockupViewerProps from './types';
import styles from './styles.module.scss';

const MockupViewer: FC<MockupViewerProps> = ({ mockupFileName, title }) => {

  const projectMockupPath: string = '/images/static/';
  const defaultMokupSource: string = `${projectMockupPath}${mockupFileName}`;
  const mediumMockupSource: string = `${projectMockupPath}medium_${mockupFileName}`;
  const mediumBreakpointSource: string = `(min-width: ${breakpoints.medium})`;
  const alternativeText: string = `${title} Mockup`;

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

export default MockupViewer;