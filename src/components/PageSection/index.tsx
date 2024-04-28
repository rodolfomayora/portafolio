import { FC } from 'react';
import Container from '../Container';
import PageSectionProps from './types';
import styles from './styles.module.scss';

const PageSection: FC<PageSectionProps> = ({ children, whiteColor }) => {
  const componenteStyle = !!whiteColor ? styles.PageSection2 : styles.PageSection;
  return (
    <section className={componenteStyle}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default PageSection;