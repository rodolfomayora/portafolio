import { technologies } from '#data/technologies';
import { addCustomId } from '#utils/addCustomId';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

export function TechSkillsSection () {
  const { t } = useLocaleDictionary();

  const myTechSkills = technologies.map(addCustomId<typeof technologies[0]>);

  const skillsToRender = myTechSkills?.map(technology => (
    <TechnologyBlock
      key={technology.customId}
      name={technology.name}
      imageSource={technology.imageSource}
    />
  ));

  return (
    <PageSection whiteColor>
      <h2 className={styles.subtitle}>
        {t.what_i_use}
      </h2>
      <div className={styles.technologyGrid}>
        {skillsToRender}
      </div>
    </PageSection>
  );
}