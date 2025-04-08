import { technologies } from '#data/technologies';
import { addCustomId } from '#utils/addCustomId';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';
import styles from './styles.module.scss';

export function TechSkillsSection () {
  const { t } = useLocaleDictionary();

  const myTechSkills = technologies.map(addCustomId<typeof technologies[0]>);

  const skillsToRender = myTechSkills.slice(0, 10).map((technology, index) => (
    <li key={technology.customId}
      className={styles.item}
      style={{ '--position': index } as any}
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
      <div className={styles.slider}>
        <ul className={styles.list} role="list">
          {skillsToRender}
        </ul>
      </div>
      {/* <ul className={styles.technologyGrid} role="list">
        {skillsToRender}
      </ul> */}
    </PageSection>
  );
}