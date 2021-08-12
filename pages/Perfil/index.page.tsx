import React, { FC, ReactNode } from 'react';

import {
  AuroraBackground,
  ContactForm,
  Container,
  ExternalLink,
  Layout,
  ProfilePicture,
} from '../../components';
import {
  ContactFormWrapper,
  DecorationSection,
  List,
  MainTitle,
  PageSection,
  PictureWrapper,
  ProfileStyled,
  Subtitle,
} from './styles';

const Perfil: FC = () => {
  
  const pageTitle: string = 'Perfil';

  const soluciontAndSkills: Array<string> = [
    'Desarollar aplicaciones web SPA con React',
    'Implementar los diseños (Photoshop, Adobe XD) en código para generar los componentes e interfaces web necesarias para permitir a los usuarios interactuar con el sistema',
    'Maquetar y adaptar los diseños web para diversos dispositivos y navegadores mediante el uso de técnicas de maquetación web tales como Flexbox y CSS Grid, teniendo siempre en mente enfoques de desarrollo responsive tales como Mobile First y Desktop First',
    'Integración del FrontEnd con BackEnd y API\'s REST de terceros (Data Fetching) mediante mecanismos de comunicación HTTP tales como Feth API',
    'Gestionar el estado global de las aplicaciones web (Data Store) mediante el uso del patron Redux en conjunto con middlewares para extender su funcionalidad, tales como: Redux-Saga y Redux-Thunk',
  ];

  const workOfInterest: Array<string> = [
    'Web Apps',
    'Sitios web estáticos mediante SSG y JAMStack con NextJS',
    'E-commerce mediante integraciones de ReactJS con Shoppify o Woocommerce',
    'Eentre otros',
  ];

  const knowledgeOfInterest: Array<string> = [
    'Jest (Unit Testing)',
    'SSR (Server Side Rendering)',
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
    <Layout pageTitle={pageTitle}>
      <ProfileStyled>
        <DecorationSection>
          <AuroraBackground />
          <MainTitle>{pageTitle}</MainTitle>
        </DecorationSection>

        <PageSection>
          <Container>
            <PictureWrapper>
              <ProfilePicture
                src="/images/static/rodolfo-mayora-pereda.jpg"
                alt="Rodolfo Mayora Pereda"/>
            </PictureWrapper>

            <Subtitle>Hola, soy Rodolfo Mayora Pereda</Subtitle>

            <p><strong>Soy desarollador Frontend con enfoque en ReactJS y TypeScript.</strong></p>

            <p>Empecé mi carrera como Ingeniero de Sistemas graduado de la UNEFA. Tengo más de dos (2) años de experiencia en desarrollo web, de los cuales cuento con más de un (1) año enfocado en desarrollo FrontEnd. He trabajado en proyectos de E-commerce, aplicaciones web, desarrollo de aplicación móvil y sitios web estáticos. En el transcurso de mi carrera he implementado las siguientes tecnologías:</p>

            <List>
              <li><strong>Librerías:</strong> ReactJS</li>
              <li><strong>Frameworks:</strong> React-Native (Expo SDK) y NextJS</li>
              <li><strong>Lenguajes:</strong> HTML5, CSS3, Sass, CSS Modules, JavaScript y TypeScript</li>
              <li><strong>Gestión de estado global:</strong>Redux y React Context API</li>
              <li><strong>Gestión de efectos:</strong>Redux-Saga, Redux-Thunk y useEffect hook</li>
              <li><strong>CMS'S:</strong> Wordpress</li>
              <li><strong>Versionado del código:</strong> Git y Github</li>
            </List>

            <p>Mi Objetivo profesional es resolver problemas complejos de la web mediante el desarrollo de soluciones simples, fáciles de entender y mantener con el menor costo y tiempo posible, junto con el cumplimiento de convenciones, la aplicación de metodologías ágiles y de buenas prácticas correspondientes para cada tipo de tecnología web.</p>

            <p><strong>¿Qué problemas puedo resolver?</strong> <br /> Puedo:</p>

            <List>{generateListElements(soluciontAndSkills)}</List>

            <p>Actualmente me encuentro en el desarrollo de proyectos web con ReactJS y NextJS.</p>

            <p><strong>Estoy muy interesado en colaborar</strong> en el desarrollo de proyectos que requieran el uso de <strong>ReactJS, TypeScript, Redux</strong>, tales como:</p>

            <List>{generateListElements(workOfInterest)}</List>

            <p>También estoy interesado en aprender tecnologías web tales como:</p>

            <List>{generateListElements(knowledgeOfInterest)}</List>

            <p>
              Puedes ver mas en mi perfil de {' '}
              <ExternalLink
                href="https://www.linkedin.com/in/rodolfo-mayora-pereda">
                LinkedIn
              </ExternalLink>
            </p>

          </Container>
        </PageSection>

        <PageSection>
          <Container>
            <Subtitle>Contacto</Subtitle>

            <ContactFormWrapper> 
              <ContactForm />
            </ContactFormWrapper>
          </Container>
        </PageSection>
      </ProfileStyled>
    </Layout>
  );
}

export default Perfil;