import { technologies } from '#data/technologies';
import { addCustomId } from '#utils/addCustomId';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import { Slider } from './Slider';
import styles from './styles.module.scss';

export function TechSkillsSection () {
  const { t } = useLocaleDictionary();

  const myTechSkills = technologies.map(addCustomId<typeof technologies[0]>);

  const frontendSkillItems = myTechSkills.reduce((items, technology) => {
    const isfrontend = technology.category === 'frontend';
    if (isfrontend) items.push(
      <li key={technology.customId} className={styles.item}>
        <TechnologyBlock name={technology.name}
          src={technology.imageSource}
          loading="eager"
          decoding="sync"
        />
      </li>
    );
    return items;
  }, []);

  const backendSkillItems = myTechSkills.reduce((items, technology) => {
    const isBackend = technology.category === 'backend';
    if (isBackend) items.push(
      <li key={technology.customId} className={styles.item}>
        <TechnologyBlock name={technology.name}
          src={technology.imageSource}
          loading="eager"
          decoding="sync"
        />
      </li>
    );
    return items;
  }, []);

  const myToolsItems = myTechSkills.reduce((items, technology) => {
    const isTool = technology.category === 'tool';
    if (isTool) items.push(
      <li key={technology.customId} className={styles.item}>
        <TechnologyBlock name={technology.name}
          src={technology.imageSource}
          loading="eager"
          decoding="sync"
        />
      </li>
    );
    return items;
  }, []);

  return (
    <PageSection whiteColor>
      <h2 className={styles.subtitle}>
        {t.what_i_use}
      </h2>
      <h3 className={styles.label}>Frontend</h3>
      <Slider duration={30}>{frontendSkillItems}</Slider>
      <h3 className={styles.label}>Backend</h3>
      <Slider duration={24} direction='right'>{backendSkillItems}</Slider>
      <h3 className={styles.label}>Tools</h3>
      <Slider>{myToolsItems}</Slider>
    </PageSection>
  );
}