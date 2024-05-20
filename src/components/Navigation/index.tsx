import Link from 'next/link';
import { useLocaleDictionary } from '#hooks/useLocaleDictionary';

type Props = {
  className?: string,
}

export function Navigation ({ className }: Props) {
  const { t } = useLocaleDictionary();
  return (
    <nav className={className} tabIndex={0}>
      <ul>
        <li><Link href="/">{t.home}</Link></li>
        <li><Link href="/portfolio">{t.portfolio}</Link></li>
        {/* <li><Link href="/profile">{t.profile}</Link></li> */}
      </ul>
    </nav>
  );
}