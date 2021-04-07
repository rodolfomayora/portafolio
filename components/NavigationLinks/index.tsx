import React, { FC } from 'react';
import Link from 'next/link';

const NavigationLinks: FC = () => (
  <>
    <Link href="/">
      <a>Inicio</a>
    </Link>
    <Link href="/Portafolio">
      <a>Portafolio</a>
    </Link>
    <Link href="/Perfil">
      <a>Perfil</a>
    </Link>
  </>
);

export default NavigationLinks;