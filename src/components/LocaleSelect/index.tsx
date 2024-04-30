import Link from 'next/link';
import { useState } from "react";
import { I18nIcon } from '#icons/svg';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

export function LocaleSelect () {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const { baseLocale } = useLocaleDictionary();

  return (
    <div className={styles.LocaleSelect}
      onClick={toggle}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button className={styles.i18nButton}
        type="button"
        aria-label="Select Page Language"
      >
        <span className={styles.i18nBase}>{baseLocale}</span>
        <I18nIcon className={styles.i18nIcon} />
      </button>

      <div className={styles.i18nContainer} aria-expanded={isOpen}>
        <div className={styles.i18nOptions}>
          <Link href="/" locale="es">Español</Link>
          <Link href="/" locale="en">English</Link>
        </div>
      </div>
    </div>
  );
}