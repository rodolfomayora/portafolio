import { FC } from 'react';
import { technologies } from '../../../../data';
import { addCustomId } from '../../../../utils';
import { TechnologyBlock } from '#components/TechnologyBlock';
import { PageSection } from '#components/PageSection';
import styles from './styles.module.scss';

const TechSkillsSection: FC = () => {
  const myTechSkills: Array<any> = technologies.map(addCustomId);

  return (
    <PageSection whiteColor>
      <h2 className={styles.subtitle}>¿Qué utilizo?</h2>
      
      <div className={styles.technologyGrid}>
        {myTechSkills?.map(technology => (
          <TechnologyBlock
            key={technology.customId}
            name={technology.name}
            pathIcon={technology.image}/>
        ))}
      </div>
    </PageSection>
  );
}

export default TechSkillsSection;