import styles from './styles.module.scss'

export type Props = {
  children: string,
};

export function TechnologyTag ({ children }: Props) {
  return (
    <div className={styles.TechnologyTag}>
      {children}
    </div>
  );
}