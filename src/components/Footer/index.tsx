import Link from 'next/link';
import { Container } from '#components/Container';
import { SocialLinks } from '#components/SocialLinks';
import { Navigation } from '#components/Navigation';
import styles from './styles.module.scss';

export function Footer () {
  const date: Date = new Date;
  const currentYear: string = date.getFullYear().toString();

  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.linkToHomeWrapper}>
            <Link className={styles.linkToHome} href="/">
              RODOLFO<br />
              MAYORA<br />
              PEREDA
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