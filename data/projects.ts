import ProjectSummaryType from '../models/ProjectSummaryType';

const projectsData: Array<ProjectSummaryType> = [
  {
    title: 'Mini Shop',
    mockupPath:  'mini-shop.png',
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, ReactJS, TypeScript, Context-API, Styled-Components, SCSS, Flexbox, Grid CSS, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/mini-shop.git',
    deployURL: 'https://mini-shop-rodolfo.vercel.app',
    deploymentPlatform: 'Vercel',
    sampleDataFrom: {
      name: 'Fake Store API',
      url: 'https://fakestoreapi.com'
    },
  },
  {
    title: 'Rest Countries App',
    mockupPath:  'rest-countries-app.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Redux, Redux-Saga, React-router-dom, SCSS, SCSS-Modules, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR), List Virtualization (Windowing)',
    sourceCodeURL: 'https://github.com/rodolfomayora/rest-countries.git',
    deployURL: 'https://rest-countries-app-swart.vercel.app',
    deploymentPlatform: 'Vercel',
    apiIntegration: {
      name: 'REST Countries',
      url: 'https://restcountries.eu'
    },
  },
  {
    title: 'Blogr Landing Page',
    mockupPath: 'blogr-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, TypeScript, SCSS, SCSS-Modules, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    renderType: 'Static Generation (SSG)',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://blogr-landing-page-orcin.vercel.app',
    deploymentPlatform: 'Vercel',
  },
  {
    title: 'Easybank Landing Page',
    mockupPath: 'easybank-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, SCSS, SCSS-Modules, CSS Grid, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Insure Landing Page',
    mockupPath: 'insure-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML, SCSS, JavaScript, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Testimonials Grid Section',
    mockupPath: 'testimonial-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, CSS-Modules, CSS Grid, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
    deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Article Preview Component',
    mockupPath: 'article-preview-mockup.png',
    focusDevelopment: 'Mobile First',
    stack: 'HTML, CSS, JavaScript, Responsive Web Design',
    webType: 'Estático',
    sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
    deployURL: 'https://rodolfomayora.github.io/article-preview-component',
    deploymentPlatform: 'Github Pages',
  },
  
  // {
  //   title: '',
  //   mockupPath:  '',
  //   focusDevelopment: '',
  //   stack: '',
  //   webType: '',
  //   renderType: '',
  //   sourceCodeURL: '',
  //   deployURL: ''
  //   deploymentPlatform: ''
  //   sampleDataFrom: '',
  //   apiIntegration: {},
  //   sampleDataFrom: {},
  // },
];

export default projectsData;