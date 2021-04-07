import ProjectSummaryType from '../types/ProjectSummaryType';

const projectImagePath: string = '/images/static/';

const projectsData: Array<ProjectSummaryType> = [
  {
    title: 'Blogr Landing Page',
    mockupPath: projectImagePath + 'blogr-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, TypeScript, Sass (SCSS), SCSS Modules, Flexbox, Responsive Web Design',
    webType: 'Estático',
    renderType: 'Static Generation (SSG) sin datos',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://blogr-landing-page-orcin.vercel.app'
  },
  {
    title: 'Easybank Landing Page',
    mockupPath: projectImagePath + 'easybank-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Sass (SCSS), SCSS Modules, CSS Grid, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page'
  },
  {
    title: 'Insure Landing Page',
    mockupPath: projectImagePath + 'insure-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page'
  },
  {
    title: 'Testimonials Grid Section',
    mockupPath: projectImagePath + 'testimonial-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, CSS Modules, CSS Grid, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
    deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section'
  },
  {
    title: 'Article Preview Component',
    mockupPath: projectImagePath + 'article-preview-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML5, CSS3, JavaScript, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
    deployURL: 'https://rodolfomayora.github.io/article-preview-component'
  },
  // {
  //   title: '',
  //   mockupPath: projectImagePath +  '',
  //   focusDevelopment: '',
  //   stack: '',
  //   webType: '',
  //   renderType: '',
  //   sourceCodeURL: '',
  //   deployURL: ''
  // },
];

export default projectsData;