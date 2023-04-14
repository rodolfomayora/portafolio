import ProjectSummaryType from '../models/ProjectSummaryType';

const categories = Object.freeze(['Frontend', 'Backend']);

const projectsData: Array<ProjectSummaryType> = [
  {
    title: 'RESTful API + Documentación',
    mockupPath:  'todo-api.png',
    category: categories[1],
    stack: 'MongoDB Atlas, Express, Node, Javascript, Jest, Supertest, Swagger, OpenAPI v3, CI/CD (Github Actions)',
    renderType: 'Server Side Rendering',
    sourceCodeURL: 'https://github.com/rodolfomayora/todo-api',
    deployURL: 'https://todo-api.fly.dev/api/v1/docs',
    deploymentPlatform: 'Fly.io',
  },
  {
    title: 'Mini Shop',
    mockupPath:  'mini-shop.png',
    category: categories[0],
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, ReactJS, TypeScript, Context-API, Styled-Components, Sass/scss, Flexbox, Grid CSS, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/mini-shop.git',
    deployURL: 'https://my-mini-shop.vercel.app',
    deploymentPlatform: 'Vercel',
    sampleDataFrom: {
      name: 'Fake Store (public API)',
      url: 'https://fakestoreapi.com'
    },
  },
  {
    title: 'Rest Countries App',
    mockupPath:  'rest-countries-app.png',
    category: categories[0],
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Redux, Redux-Saga, React-router-dom, Sass/scss, Flexbox, Responsive Web Design',
    webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR), List Virtualization (Windowing)',
    sourceCodeURL: 'https://github.com/rodolfomayora/rest-countries.git',
    deployURL: 'https://my-rest-countries.vercel.app',
    deploymentPlatform: 'Vercel',
    apiIntegration: {
      name: 'REST Countries (public API)',
      url: 'https://restcountries.com/'
    },
  },
  {
    title: 'Blogr Landing Page',
    mockupPath: 'blogr-mockup.png',
    category: categories[0],
    focusDevelopment: 'Mobile First',
    stack: 'NextJS, ReactJS, TypeScript, Sass/scss, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    renderType: 'Static Generation (SSG)',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://my-blogr-landing-page.vercel.app',
    deploymentPlatform: 'Vercel',
  },
  {
    title: 'Easybank Landing Page',
    mockupPath: 'easybank-mockup.png',
    category: categories[0],
    focusDevelopment: 'Mobile First',
    stack: 'ReactJS, TypeScript, Sass/scss, CSS Grid, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Insure Landing Page',
    mockupPath: 'insure-mockup.png',
    category: categories[0],
    focusDevelopment: 'Mobile First',
    stack: 'HTML, Sass/scss, JavaScript, Flexbox, Responsive Web Design',
    webType: 'Landing Page',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Testimonials Grid Section',
    mockupPath: 'testimonial-mockup.png',
    category: categories[0],
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
    category: categories[0],
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
  //   category: '',
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