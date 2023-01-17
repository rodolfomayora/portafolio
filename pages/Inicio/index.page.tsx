import { FC } from 'react';

import { Layout } from '../../components';

import MainSection from './sections/MainSection';
import TechSkillsSection from './sections/TechSkillsSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

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