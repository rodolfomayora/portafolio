import React, { FC } from 'react';
import {
  Layout,
  Container,
  AuroraBackground,
  ContactForm
} from '../../components';
import style from './style.module.scss';

const Perfil: FC = () => (
  <Layout pageTitle="Perfil">
    <main className={style.Profile}>
      <section className={style.layer}>
        <AuroraBackground />
        <h1 className={style.mainTitle}>Perfil</h1>
      </section>

      <Container>
        <div className={style.contentWrapper}>
          <div className={style.pictureWrapper}>
            <div className={style.pictureLayer}>
              <div className={style.pitureContent}>
                <img className={style.myPicture}
                  src="/images/static/rodolfo-mayora-pereda.jpg"
                  alt="Rodolfo Mayora Pereda"
                  width="130"
                  height="130"
                />
              </div>
            </div>
          </div>

          <section>
            <h2 className={style.title}>Hola, soy Rodolfo Mayora Pereda</h2>

            <p><strong>Soy desarollador Frontend con enfoque en ReactJS.</strong></p>
            
            <p>Empecé mi carrera como Ingeniero de Sistemas graduado de la Universidad Nacional Experimental Politécnica de la Fuerza Armada (UNEFA). Tengo más de un año y medio de experiencia como desarrollador FrontEnd tanto en proyectos de E-commerce como en sitios web estáticos y aplicaciones web. He trabajado con:</p>
            <ul className={style.list}>
              <li><strong>Lenguajes:</strong> HTML5, CSS3, SASS, JavaScript y TypeScript</li>
              <li><strong>CMS's: </strong>Woocommerce (Wordpress)</li>
              <li><strong>Frameworks:</strong> ReactJS y React Native</li>
              <li><strong>State Management: </strong> Redux (y middleWares: Redux-Saga y Redux-Thunk)</li>
            </ul>

            <p>Mi Objetivo profesional es resolver problemas complejos de la web mediante el desarrollo de soluciones simples, fáciles de entender y mantener con el menor costo y tiempo posible, junto con el cumplimiento de convenciones, la aplicación de metodologías ágiles y de buenas prácticas correspondientes para cada tipo de tecnología web.</p>
            
            <p><strong>¿Qué problemas puedo resolver?</strong> puedo:</p>

            <ul className={style.list}>
              <li>Implementar los diseños (Photoshop, Adobe XD) en código para generar los componentes e interfaces web necesarias para permitir a los usuarios interactuar con la plataforma</li>

              <li>Maquetar y adaptar los diseños web para diversos dispositivos y navegadores mediante el uso de técnicas de maquetación web tales como Flexbox y CSS Grid, teniendo siempre en mente enfoques de desarrollo responsive tales como Mobile First y Desktop First </li>

              <li>Integración del FrontEnd con BackEnd y API's REST de terceros (Data Fetching) mediante mecanismos de comunicación HTTP tales como Feth API</li>

              <li>Gestionar el estado global de las aplicaciones web (Data Store) mediante el uso del patron Redux en conjunto con middlewares para extender su funcionalidad, tales como: Redux-Saga y Redux-Thunk</li>

              <li>Mejorar el rendiemiento de las aplicaciones mediante técnicas de renderizado tales como: <abbr title="Client Side Rendering">CSR</abbr> (<abbr title="Single Page Aplication">SPA</abbr>) mediante ReactJS y <abbr title="Static Generation">SSG</abbr> mediante NextJS</li>
            </ul>

            <p>Actualmente me encuentro en el desarrollo de proyectos web con ReactJS y NextJS.</p>

            <p><strong>Estoy muy interesado en colaborar</strong> en el desarrollo de proyectos que requieran el uso de <strong>ReactJS, TypeScript, Redux</strong>, tales como:</p>

            <ul className={style.list}>
              <li>Web Apps</li>
              <li>Sitios web estáticos mediante SSG</li>
              <li>JAMStack</li>
              <li>Integraciones de ReactJS con Shoppify o Woocommerce para E-commerce</li>
              <li>entre otros</li>
            </ul>

            <p>También estoy interesado en aprender tecnologías web tales como:</p>
          
            <ul className={style.list}>
              <li>Jest (Unit Testing)</li>
              <li>SSR (Server Side Rendering)</li>
              <li>GraphQL mediante el uso de Apollo CLient o Relay Framework</li>
              <li>PWA</li>
            </ul>

            <p>
              Puedes ver mas en mi perfil de {' '}
              <a className={style.linkWrapper}
                href="https://www.linkedin.com/in/rodolfo-mayora-pereda"
                target="_blank"
                rel="external noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </section>

          <section className={style.contactSection}>
            <h2 className={style.title}>Contacto</h2>

            <div className={style.contactFormWrapper}> 
              <ContactForm />
            </div>
          </section>
        </div>
      </Container>
    </main>
  </Layout>
)

export default Perfil;