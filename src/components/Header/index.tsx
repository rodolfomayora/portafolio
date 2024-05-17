import { Container } from '#components/Container';
import { Navigation } from '#components/Navigation';
import { LocaleSelect } from '#components/LocaleSelect';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import { useScrollState } from './useScrollState';
import styles from './styles.module.scss';

type Props = {
  currentPage: string,
}

export function Header ({ currentPage }: Props) {
  const { t } = useLocaleDictionary();
  const { didScroll } = useScrollState();

  const navigationIndex = {
    [t.home]     : styles.first,
    [t.portfolio]: styles.second, 
    [t.profile]  : styles.third,
  }

  const optionIndex = navigationIndex[currentPage];
  const navigationStyle = `${styles.navigationBar} ${optionIndex}`;

  return (
    <div className={styles.Header} data-did-scroll={didScroll}>
      <Container>
        <div className={styles.headerContent}>
          <Navigation className={navigationStyle}/>
          <LocaleSelect />
        </div>
      </Container>
    </div>
  );
}