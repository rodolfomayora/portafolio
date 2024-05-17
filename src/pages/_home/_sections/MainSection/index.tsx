import { Container } from '#components/Container';
import { SocialLinks } from '#components/SocialLinks';
import { AuroraBackground } from '#components/AuroraBackground';
import styles from './styles.module.scss';

export function MainSection () {
  return (
    <section className={styles.MainSection}>
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