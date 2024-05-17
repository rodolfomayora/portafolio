import styles from './styles.module.scss'

type Props = {
  children: string,
};

export function TechnologyTag ({ children }: Props) {
  return (
    <div className={styles.TechnologyTag}>
      {children}
    </div>
  );
}