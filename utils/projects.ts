import ProjectSummaryType from '../types/ProjectSummaryType';

const projectsData: Array<ProjectSummaryType> = [
  {
    title: 'Rest Countries App',
    mockupPath:  'rest-countries-app.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Redux, Redux-Saga, Sass (SCSS), CSS Modules, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'CSR, List Virtualization (Windowing)',
    sourceCodeURL: 'https://github.com/rodolfomayora/rest-countries.git',
    deployURL: 'https://rest-countries-app-swart.vercel.app',
    apiIntegration: {
      name: 'REST Countries',
      url: 'https://restcountries.eu'
    }
  },
  {
    title: 'Blogr Landing Page',
    mockupPath: 'blogr-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, TypeScript, Sass (SCSS), CSS Modules, Flexbox, Responsive Web Design',
    webType: 'Estático',
    renderType: 'Static Generation (SSG) sin datos',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://blogr-landing-page-orcin.vercel.app'
  },
  {
    title: 'Easybank Landing Page',
    mockupPath: 'easybank-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Sass (SCSS), CSS Modules, CSS Grid, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page'
  },
  {
    title: 'Insure Landing Page',
    mockupPath: 'insure-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML, Sass (SCSS), JavaScript, Flexbox, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page'
  },
  {
    title: 'Testimonials Grid Section',
    mockupPath: 'testimonial-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, CSS Modules, CSS Grid, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
    deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section'
  },
  {
    title: 'Article Preview Component',
    mockupPath: 'article-preview-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML5, CSS3, JavaScript, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
    deployURL: 'https://rodolfomayora.github.io/article-preview-component'
  },
  
  // {
  //   title: '',
  //   mockupPath:  '',
  //   focusDevelopment: '',
  //   apiIntegration: '',
  //   stack: '',
  //   webType: '',
  //   renderType: '',
  //   sourceCodeURL: '',
  //   deployURL: ''
  // },
];

export default projectsData;