import { FC } from 'react';

import { Layout } from '../../components';
import ContactSection from '../_commonSections/ContactSection';
import MainSection from './_sections/MainSection';
import TechSkillsSection from './_sections/TechSkillsSection';
import PortfolioSection from './_sections/PortfolioSection';
// import ContactSection from './_sections/ContactSection';

// I set a rewrite route in 'next.config.js' to show this page in root path request '/'
// now its not nescesary to define index.js in root path

const Home: FC = () => (
  <Layout pageTitle="Inicio">
    <main>
      <MainSection />
      <TechSkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  </Layout>
);

export default Home;