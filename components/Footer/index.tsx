import React, { FC } from 'react';

import Link from 'next/link';

import Container from '../Container';
import SocialLinks from '../SocialLinks';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

const Footer: FC = () => {

  const date: Date = new Date;
  const currentYear: string = date.getFullYear().toString();

  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.linkToHomeWrapper}>
            <Link href="/">
              <a className={styles.linkToHome}>
                RODOLFO<br />
                MAYORA<br />
                PEREDA
              </a>
            </Link>
          </div>
  
          <Navigation className={styles.innerNavigation} />
  
          <div className={styles.socialLinksWrapper}>
            <SocialLinks />
          </div>
        </div>
  
        <div className={styles.footerBottom}>
          <small>
            &copy; <time dateTime={currentYear}>{currentYear}</time> - Rodolfo Mayora Pereda
          </small>
        </div>
      </Container>
    </div>
  );
}

export default Footer;