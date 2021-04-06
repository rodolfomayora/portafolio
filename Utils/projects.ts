import ProyectSummaryType from '../types/ProyectSummaryType';

const projectsData: Array<ProyectSummaryType> = [
  {
    title: 'Blogr Landing Page',
    mockupPath: '/images/static/blogr-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, Responsive Web Design',
    webType: 'Estático',
    renderType: 'Static Generation (SSG) sin datos',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://blogr-landing-page-orcin.vercel.app'
  },
  {
    title: 'Easybank Landing Page',
    mockupPath: '/images/static/easybank-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page'
  },
  {
    title: 'Insure Landing Page',
    mockupPath: '/images/static/insure-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page'
  },
  // {
  //   title: '',
  //   mockupPath: '',
  //   focusDevelopment: '',
  //   stack: '',
  //   webType: '',
  //   renderType: '',
  //   sourceCodeURL: '',
  //   deployURL: ''
  // }
];

export default projectsData;