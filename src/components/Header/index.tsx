import { Container } from '#components/Container';
import { Navigation } from '#components/Navigation';
import { LocaleSelect } from '#components/LocaleSelect';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
// import { useScrollState } from './useScrollState';
import styles from './styles.module.scss';
// import { useInView } from "react-intersection-observer";


type Props = {
  currentPage: string,
}

export function Header ({ currentPage }: Props) {
  const { t } = useLocaleDictionary();
  // const { ref, inView } = useInView();
  // const didScroll = !inView;

  const navigationIndex = {
    [t.home]     : styles.first,
    [t.portfolio]: styles.second, 
    [t.profile]  : styles.third,
  }

  const optionIndex = navigationIndex[currentPage];
  const navigationStyle = `${styles.navigationBar} ${optionIndex}`;

  return (
    <>
      {/* <div ref={ref} style={{ width: "100%", height: "0"  }}></div> */}
      {/* <div className={styles.Header} data-did-scroll={didScroll}> */}
      <div className={styles.Header} data-did-scroll={false}>
        <Container>
          <div className={styles.headerContent}>
            <Navigation className={navigationStyle}/>
            <LocaleSelect />
          </div>
        </Container>
      </div>
    </>
  );
}