import { FC } from 'react';

import { BasicLayout } from '#layouts/BasicLayout';
// import ContactSection from '../_commonSections/ContactSection';
import MainSection from './_sections/MainSection';
import TechSkillsSection from './_sections/TechSkillsSection';
import PortfolioSection from './_sections/PortfolioSection';

// I set a rewrite route in 'next.config.js' to show this page in root path request '/'
// now its not nescesary to define index.js in root path

const Inicio: FC = () => (
  <BasicLayout pageTitle="Inicio">
    <main>
      <MainSection />
      <TechSkillsSection />
      <PortfolioSection />
      {/* <ContactSection /> */}
    </main>
  </BasicLayout>
);

export default Inicio;