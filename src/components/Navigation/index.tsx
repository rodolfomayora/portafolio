import React, { FC } from 'react';
import Link from 'next/link';
import NavigationProps from './types';

const Navigation: FC<NavigationProps> = ({ className }) => (
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

export default Navigation;