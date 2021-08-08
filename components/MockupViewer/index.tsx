import React , { FC } from 'react';

import { breakpoints } from '../../styles/config';
import { Mockup, MockupLayer } from './styles';

type MockupViewerProps = {
  mockupFileName: string,
  title: string,
}

const MockupViewer: FC<MockupViewerProps> = ({ mockupFileName, title }) => {

  const projectMockupPath: string = '/images/static/';
  const defaultMokupSource: string = `${projectMockupPath}${mockupFileName}`;
  const mediumMockupSource: string = `${projectMockupPath}medium_${mockupFileName}`;
  const mediumBreakpointSource: string = `(min-width: ${breakpoints.medium})`;
  const alternativeText: string = `${title} Mockup`;

  return (
    <div>
      <MockupLayer>
        <picture>
          <source
            media={mediumBreakpointSource}
            srcSet={mediumMockupSource} />
          <Mockup
            src={defaultMokupSource}
            alt={alternativeText}
            width="270"
            height="140" />
        </picture>
      </MockupLayer>
    </div>
  );
}

export default MockupViewer;