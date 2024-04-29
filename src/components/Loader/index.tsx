import styles from './styles.module.scss';

type Props = {
  dark?: boolean,
  small?: boolean,
}

export function Loader ({ small, dark }: Props) {
  const loaderStyle = `
    ${styles.Loader}
    ${small ? styles.small : ''}
    ${dark ? styles.dark : ''}
  `;

  return <div className={loaderStyle} />;
}

export default Loader;