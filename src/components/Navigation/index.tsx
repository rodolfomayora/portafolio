import Link from 'next/link';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';

type Props = {
  className?: string,
}

export function Navigation ({ className }: Props) {
  const { t } = useLocaleDictionary();
  return (
    <nav className={className}>
      <Link href="/">
        {t.home}
      </Link>
      <Link href="/portfolio">
        {t.portfolio}
      </Link>
      <Link href="/profile">
        {t.profile}
      </Link>
    </nav>
  );
}