import type { ReactNode, CSSProperties  } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
  direction?: 'right' | 'left',
  duration?: number,
  itemsGap?: number,
}

export function Slider({ children, direction = 'left', duration, itemsGap }: Props) {
  const sliderConfig = {
    "--slider-items-gap": itemsGap && `${itemsGap}px`,
    "--slider-duration": duration && `${duration}s`,
  } as CSSProperties;

  return (
    <div className={styles.slider} style={sliderConfig}>
      <ul className={styles.list}
        data-slider-direction={direction}
        role="list"
      >
        {children}
      </ul>
      <ul className={styles.list}
        data-slider-direction={direction}
        aria-hidden="true" /* hidde list duplication from screen readers */
        role="list"
      >
        {children}
      </ul>
    </div>
  );
}