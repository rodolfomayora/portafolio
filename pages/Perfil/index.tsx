import React, { FC } from 'react';
import {
  Layout,
  Container,
  AuroraBackground,
  MainButtonWrapper
} from '../../components';
import style from './style.module.scss';

const Perfil: FC = () => (
  <Layout pageTitle="Perfil">
    <main className={style.Profile}>
      <section className={style.layer}>
        <AuroraBackground />
        <h1 className={style.mainTitle}>Rodolfo Mayora Pereda</h1>
      </section>

      <Container>
        <div className={style.contentWrapper}>
          <div className={style.pictureWrapper}>
            <div className={style.pictureLayer}>
              <div className={style.pitureContent}>
                <img className={style.myPicture}
                  src="/images/static/rodolfo.png"
                  alt="Rodolfo Mayora Pereda"
                />
              </div>
            </div>
          </div>
          <section>
            <h2>👋 Hi, I’m Rodolfo Mayora Pereda</h2>
            <h3>Frontend Developer</h3>
          </section>

          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
          
          <h2>descipcion de github</h2>
          <div>
            <p>👋 Hi, I’m Rodolfo Mayora Pereda</p>

            <p>👀 I’m interested in FrontEnd development focused on React Ecosystem</p>
            <p>🌱 I’m currently learning ReactJS in depth with TypeScript, SCSS Modules and State Management with Context React API and Redux. And soon: SSR, and GraphQL integrations through Apollo and Relay framework</p>
            <p>💞️ I’m looking to collaborate on Static Sites, Web Apps, JAMSTACK and E-commerce React Platforms with Shoppify or Woocommerce integration</p>
            <p>  📫 How to reach me: rodolfomayora96@gmail.com</p>
          </div>
          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>

          <h2>descripcion de viejo portafolio</h2>

          <div>
            👋 Hola, ¿cómo estás? espero que bien, me llamo Rodolfo Mayora Pereda.<br/>

            Soy Desarrollador Web Junior, y mi enfoque principal es resolver problemas complejos de la web mediante el desarrollo de soluciones simples, fáciles de entender y mantener con el menor costo y tiempo posible, junto con el cumplimiento de convenciones, y la aplicación de metodologías ágiles y de buenas prácticas correspondientes para cada tipo de tecnología web.<br/>

            A pesar de ser "Junior" soy capaz de: <br/>

            Crear e implementar diseños de sitios web con HTML y CSS mediante técnicas de maquetación web tales como Flex-box y css-grid.<br/>
            Otorgar interacción, comportamiento personalizado y representación gráfica de datos en los sitios web con JavaScript mediante la manipulación del DOM.<br/>
            Adaptar sitios web a múltiples dispositivos y navegadores web, de tal manera que se vean bien y funcionen correctamente tanto en pantallas de computadora como en dispositivos móviles tales como teléfonos y tablets indistintamente del navegador web que utilicen sea firefox, Edge, etc.
          </div>

          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>

          <div style={{display: 'flex'}}>
            <MainButtonWrapper>
              <a>
                LinkedId
              </a>
            </MainButtonWrapper>
            <MainButtonWrapper>
              <a>
                Contacto
              </a>
            </MainButtonWrapper>
          </div>
        </div>
      </Container>
    </main>
  </Layout>
)

export default Perfil;