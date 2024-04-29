import styles from './styles.module.scss';

/**
 * this component needs to be into a component with the next porperties:
 * position: relative;
 * z-index: 0;
 * background: *transparent*
 */
  
export function AuroraBackground () {
  return (
    <div className={styles.AuroraBrackground}>
      <div className={styles.layer}>
        <div className={styles.shape} />
        <div className={styles.shape} />
        <div className={styles.shape} />
        <div className={styles.shape} />
        <div className={styles.shape} />
      </div>
    </div>
  );
}