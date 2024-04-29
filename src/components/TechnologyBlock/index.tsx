import styles from './styles.module.scss';

type Props = {
  name: string,
  pathIcon: string
}

export function TechnologyBlock ({ name, pathIcon }: Props) {
  return (
    <div className={styles.TechnologyBlock}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src={pathIcon}
          alt={name + ' Icon'}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.label}>{name}</div>
    </div>
  );
}