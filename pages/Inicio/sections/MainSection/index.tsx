import React, { FC, useEffect, useState } from 'react';

import {
  AuroraBackground,
  Container,
  SocialLinks,
} from '../../../../components';
import styles from './styles.module.scss';

const MainSection: FC = () => {
  // this logis its mostly for mobile screens
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  useEffect(() => {
    const updateViewportHeight = () => {
      const windowInnerHeight: number = window.innerHeight;
      setViewportHeight(windowInnerHeight);
    }

    updateViewportHeight();
  },
  [])

  const viewportHeightStyle = {
    '--viewport-height': `${viewportHeight}px`
  }

  const mainSectionHeight = !!viewportHeight ? viewportHeightStyle : {};
  return (
    <section className={styles.MainSection} style={mainSectionHeight}>
      <AuroraBackground />
      <Container>
        <div className={styles.contentLayer}>
          <div className={styles.frostedLayer} />

          <div className={styles.infoWrapper}>
            <h1 className={styles.mainTitle}>
              RODOLFO<br />
              MAYORA<br />
              PEREDA
            </h1>
            
            <span className={styles.techRole}>FRONTEND DEVELOPER</span>

            <div className={styles.socialLinksWrapper}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainSection;