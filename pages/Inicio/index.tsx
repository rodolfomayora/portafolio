import React, { FC } from 'react';
import {
  Layout,
  Container,
  AuroraBackground,
  TecnologyBlock,
  MainButtonWrapper,
  ProjectSummary
} from '../../components';
import Link from 'next/link';
import style from './style.module.scss';
import { Github, Linkedin, Telegram} from '../../public/images';
import projects from '../../utils/projects';
import tecnologies from '../../utils/tecnologies';

const Home: FC = () => {

  const addId = (item: any, index: number) => {
    return {
      ...item,
      customId: (index + 1).toString()
    }
  }

  const myTechSkills: Array<any> = tecnologies.map(addId);

  const portfolio: Array<any> = projects
    .slice(0,3)
    .map(addId);

  return (
    <Layout pageTitle="Inicio">
      <main className={style.Inicio}>

        {/* Main Section */}
        <section className={style.mainSection}>
          <AuroraBackground />

          <Container>
            <div className={style.sectionWrapper}>
              <div className={style.frostedLayer}></div>

              <div className={style.infoWrapper}>
                <h1 className={style.mainTitle}>
                  RODOLFO<br />
                  MAYORA<br />
                  PEREDA
                </h1>
                <div className={style.techRol}>
                  FRONTEND DEVELOPER
                </div>
                <div className={style.socialLinks}>
                  <Github className={style.link} />
                  <Linkedin className={style.link} />
                  <Telegram className={style.link} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Skills Section */}
        <section className={style.sectionTechSkills}>
          <Container>
            <div className={style.sectionWrapper}>
              <h2 className={style.sectionTitle}>¿Qué utilizo?</h2>
              <div className={style.tecnologies}>
              {!!myTechSkills && myTechSkills.map((item: any) => (
                <TecnologyBlock
                  key={item.customId}
                  name={item.name}
                  pathIcon={item.image}
                />
              ))}
              </div>
            </div>
          </Container>
        </section>
  
        {/* Portfolio Section */}
        <section className={style.portfolioSection}>
          <Container>
            <div className={style.sectionWraper}>
              <h2 className={style.sectionTitle}>Portafolio</h2>

              {!!portfolio && portfolio.map((item: any) => (
                <ProjectSummary
                  key={item.customId}
                  title={item.title}
                  mockupPath={item.mockupPath}
                  focusDevelopment={item.focusDevelopment}
                  stack={item.stack}
                  sourceCodeURL={item.sourceCodeURL}
                  deployURL={item.deployURL}
                  renderType={item?.renderType}
                  webType={item.webType}
                />
              ))}              

              <div className={style.more}>
                <MainButtonWrapper>
                  <Link href="/Portafolio">
                    <a>Ver más proyectos</a>
                  </Link>
                </MainButtonWrapper>
              </div>
            </div>
          </Container>
        </section>
  
        {/* <section>
          <Container>
            <h2 className={style.title}>Intereses / ¿que tecnologias me gustaria aprender?</h2>
          </Container>
        </section> */}
      </main>
    </Layout>
  )
}

export default Home;