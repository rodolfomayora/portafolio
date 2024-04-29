import Link from 'next/link';

type Props = {
  className?: string,
}

export function Navigation ({ className }: Props) {
  return (
    <nav className={className}>
      <Link href="/">
        Inicio
      </Link>
      <Link href="/portafolio">
        Portafolio
      </Link>
      <Link href="/perfil">
        Perfil
      </Link>
    </nav>
  );
}