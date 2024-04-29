import styles from './styles.module.scss'

type Props = {
  name: string,
  id?: string,
};

export function TechnologyTag ({ name }: Props) {
  return (
    <div className={styles.technologyTag}>
      <div className={styles.content}>
        {name}
      </div>
    </div>
  );
}