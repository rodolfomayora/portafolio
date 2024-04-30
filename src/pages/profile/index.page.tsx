import type { ReactNode } from 'react';
import * as links from '#data/socialLinks';
import { BasicLayout } from '#layouts/BasicLayout';
import { PageSection } from '#components/PageSection';
import { ExternalLink } from '#components/ExternalLink';
import { ProfilePicture } from '#components/ProfilePicture';
import { AuroraBackground } from '#components/AuroraBackground';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';

// import { ContactSection } from '../_commonSections/ContactSection';
import styles from './styles.module.scss';

function Profile () {
  const { t } = useLocaleDictionary();
  const pageTitle: string = t.profile;

  const soluciontAndSkills: Array<string> = [
    'Desarollar aplicaciones web SPA con React y NextJS',
    'Implementar Server Side Rendering con NextJS',
    'Implementar los diseños (Figma, Adobe XD, Zeplin, Penpot) en código para generar los componentes e interfaces web necesarias que permitan a los usuarios interactuar con el sistema',
    'Maquetar y adaptar los diseños web para diversos dispositivos y navegadores mediante el uso de técnicas de maquetación web tales como Flexbox y CSS Grid, teniendo siempre en mente enfoques de desarrollo responsive tales como Mobile First y Desktop First',
    'Integración del FrontEnd con BackEnd y API\'s REST de terceros (Data Fetching) mediante mecanismos de comunicación HTTP tales como Feth API',
    'Gestionar el estado global de las aplicaciones web (Data Store) mediante el uso del patron Redux en conjunto con middlewares para extender su funcionalidad, tales como: Redux-Saga y Redux-Thunk',
  ];

  const workOfInterest: Array<string> = [
    'Aplicaciones Web (SPA y SSR)',
    'Sitios web estáticos mediante SSG y JAMStack',
    'E-commerce mediante integraciones de ReactJS con Shoppify o Woocommerce',
    'Control de calidad de software con pruebas unitarias y de integración mediante JEST, tanto con el FrontEnd como el Backend',
  ];

  const knowledgeOfInterest: Array<string> = [
    'GraphQL mediante el uso de Apollo CLient',
    'PWA (Progresive Web Apps)',
  ];

  type GenerateListFunction = (listInfo: Array<string>) => Array<ReactNode>;

  const generateListElements: GenerateListFunction = listInfo => {
    return listInfo.map((info, index) => (
      <li key={index.toString()}>{info}</li>
    ));
  }

  return (
    <BasicLayout pageTitle={pageTitle}>
      <main className={styles.profile}>
        <div className={styles.decorationSection}>
          <AuroraBackground />
          <h1 className={styles.mainTitle}>{pageTitle}</h1>
        </div>

        <PageSection>
          <div className={styles.pictureWrapper}>
            <ProfilePicture
              src="/images/static/rodolfo-mayora-pereda.jpg"
              alt="Rodolfo Mayora Pereda" />
          </div>

          <h2 className={styles.profileName}>Hola, soy Rodolfo Mayora Pereda</h2>

          <p><strong>Soy desarollador Frontend con enfoque en ReactJS.</strong></p>

          <p>Empecé mi carrera como Ingeniero de Sistemas graduado de la UNEFA. Tengo más de tres (3) años de experiencia en desarrollo web, de los cuales cuento con más de dos (2) años enfocado en desarrollo FrontEnd. He trabajado en proyectos de E-commerce, aplicaciones web (SPA y SSR), desarrollo de aplicaciones móviles (Android) y sitios web estáticos. En el transcurso de mi carrera he implementado las siguientes tecnologías:</p>

          <ul className={styles.list}>
            <li><strong>Librerías FronEnd:</strong> ReactJS</li>
            <li><strong>Frameworks:</strong> NextJS, React-Native (Expo SDK) y ExpressJS</li>
            <li><strong>Lenguajes:</strong> HTML5, CSS3, Sass, CSS Modules, JavaScript y TypeScript</li>
            <li><strong>Gestión de estado global:</strong> React-Context API y Redux (y middlewares: Redux-Saga, Redux-Thunk)</li>
            <li><strong>Entornos de ejecución:</strong> Linux (WSL2 - Ubuntu) y NodeJS</li>
            <li><strong>Gestión de versiones de código:</strong> Git</li>
            <li><strong>Repositorios de código:</strong> Github y Bitbucket</li>
            <li><strong>Despliegues:</strong> Github y Bitbucket</li>
            <li><strong>Base de datos:</strong> Firestore (NoSQL)</li>
            <li><strong>CMS's:</strong> Wordpress</li>
            <li><strong>Hosting:</strong> Hostinger</li>
            <li><strong>Geolocalización:</strong> Google Maps API y HTML Geolocation API</li>
          </ul>
          <br />
          <p>Mi Objetivo profesional es resolver problemas complejos de la web mediante el desarrollo de soluciones simples, fáciles de entender y mantener con el menor costo y tiempo posible, empleando metodologías ágiles, principios de código y buenas prácticas correspondientes para cada tipo de tecnología web.</p>
          <br />
          <p><strong>¿Qué problemas puedo resolver?</strong> <br /> Puedo:</p>

          <ul className={styles.list}>{generateListElements(soluciontAndSkills)}</ul>
          <br />
          <p>Actualmente me encuentro en el desarrollo de proyectos web con ReactJS y NextJS.</p>

          <p><strong>Estoy muy interesado en colaborar</strong> en el desarrollo de proyectos que requieran el uso de <strong>ReactJS</strong>, <strong>JavaScript</strong> y <strong>automatización de pruebas de software</strong>, tales como:</p>

          <ul className={styles.list}>{generateListElements(workOfInterest)}</ul>
          <br />
          <p>También estoy interesado en aprender tecnologías web tales como:</p>

          <ul className={styles.list}>{generateListElements(knowledgeOfInterest)}</ul>
          <br />

          <p>
            Puedes ver mas en mi perfil de {' '}
            <ExternalLink href={links.linkedInProfile}>
              LinkedIn
            </ExternalLink>
          </p>
        </PageSection>

        {/* <ContactSection /> */}
      </main>
    </BasicLayout>
  );
}

export default Profile;
