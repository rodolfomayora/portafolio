import type { ReactNode } from 'react';
import { Container } from '#components/Container';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
  whiteColor?: boolean,
}

export function PageSection ({ children, whiteColor }: Props) {
  const componenteStyle = !!whiteColor ? styles.PageSection2 : styles.PageSection;
  return (
    <section className={componenteStyle}>
      <Container>
        {children}
      </Container>
    </section>
  );
}