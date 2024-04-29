import { technologies } from '../../../../data';
import { addCustomId } from '#utils/addCustomId';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import styles from './styles.module.scss';

export function TechSkillsSection () {
  const myTechSkills: Array<any> = technologies.map(addCustomId);

  return (
    <PageSection whiteColor>
      <h2 className={styles.subtitle}>¿Qué utilizo?</h2>
      
      <div className={styles.technologyGrid}>
        {myTechSkills?.map(technology => (
          <TechnologyBlock
            key={technology.customId}
            name={technology.name}
            imageSource={technology.imageSource}/>
        ))}
      </div>
    </PageSection>
  );
}