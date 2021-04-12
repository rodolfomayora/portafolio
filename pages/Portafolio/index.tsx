import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import style from './style.module.scss';
import { ProjectSummary, AuroraBackground } from '../../components';
import projects from '../../utils/projects';

const Portafolio: FC = () => {

  const addId = (item: any, index: number) => {
    return {
      ...item,
      customId: (index + 1).toString()
    }
  }

  const portfolio: Array<any> = projects.map(addId);

  return (
    <Layout pageTitle="Portafolio">
      <main className={style.Portfolio}>
        <section className={style.layer}>
          <AuroraBackground />
          <h1 className={style.mainTitle}>Portafolio</h1>
        </section>
        <Container>
          <div className={style.contentWrapper}>
            {!!portfolio && portfolio.map((item) => (
              <ProjectSummary
                key={item.customId}
                title={item.title}
                mockupPath={item.mockupPath}
                focusDevelopment={item.focusDevelopment}
                stack={item.stack}
                renderType={item.renderType}
                webType={item.webType}
                sourceCodeURL={item.sourceCodeURL}
                deployURL={item.deployURL}
              />
            ))}
          </div>
        </Container>
      </main>
    </Layout>
  );
}

export default Portafolio;