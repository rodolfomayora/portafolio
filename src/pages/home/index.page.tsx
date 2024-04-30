import { BasicLayout } from '#layouts/BasicLayout';
// import { ContactSection } from '../_commonSections/ContactSection';
import { MainSection } from './_sections/MainSection';
import { TechSkillsSection } from './_sections/TechSkillsSection';
import { PortfolioSection } from './_sections/PortfolioSection';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';

// I set a rewrite route in 'next.config.js' to show this page in root path request '/'
// now its not nescesary to define index.js in root path

function Home () {
  const { t } = useLocaleDictionary();
  const pageTitle = t.home;
  return (
    <BasicLayout pageTitle={pageTitle}>
      <main>
        <MainSection />
        <TechSkillsSection />
        <PortfolioSection />
        {/* <ContactSection /> */}
      </main>
    </BasicLayout>
  );
}

export default Home;