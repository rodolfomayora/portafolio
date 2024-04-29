import { FC } from 'react';
import { PageSection } from '#components/PageSection';
import { ContactForm } from '#components/ContactForm';
import styles from './styles.module.scss';

const ContactSection: FC = () => {
  return (
    <PageSection>
      <h2 className={styles.subtitle}>Contacto</h2>
      <div className={styles.contactFormWrapper}> 
        <ContactForm />
      </div>
    </PageSection>
  );
}

export default ContactSection;