import { technologies } from '#data/technologies';
import { addCustomId } from '#utils/addCustomId';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import { useObserver } from './useObserver';
import styles from './styles.module.scss';

export function TechSkillsSection () {
  const { t } = useLocaleDictionary();
  const { containerRef } = useObserver();

  const myTechSkills = technologies.map(addCustomId<typeof technologies[0]>);

  const skillsToRender = myTechSkills?.map((technology) => (
    <li key={technology.customId}
      className={styles.item}
      data-in-view={false}
    >
      <TechnologyBlock name={technology.name}
        src={technology.imageSource}
        loading="lazy"
        decoding="auto"
      />
    </li>
  ));

  return (
    <PageSection whiteColor>
      <h2 className={styles.subtitle}>
        {t.what_i_use}
      </h2>
      <ul className={styles.technologyGrid} ref={containerRef}>
        {skillsToRender}
      </ul>
    </PageSection>
  );
}