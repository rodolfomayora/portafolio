import React, { FC } from 'react';
import Link from 'next/link';
import NavigationProps from './types';

const Navigation: FC<NavigationProps> = ({ className }) => (
  <nav className={className}>
    <Link href="/">
      <a>Inicio</a>
    </Link>
    <Link href="/portafolio">
      <a>Portafolio</a>
    </Link>
    <Link href="/perfil">
      <a>Perfil</a>
    </Link>
  </nav>
);

export default Navigation;