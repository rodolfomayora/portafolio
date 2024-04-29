import ProjectSummaryType from '../models/ProjectSummaryType';

const categories = Object.freeze(['Frontend', 'Backend']);


const html = 'HTML';
const css = 'CSS';
const javascript = 'JavsScript';
const typescript = 'TypeScript';
const sass = 'Sass/SCSS';
const cssModules = 'CSS Modules';
const reactjs = 'React.js';
const nextjs = 'Next.js';
const redux = 'Redux';
const reduxSagas = 'Redux-Sagas';
const docker = 'Docker';
const vitejs = 'Vite.js';
const huskyjs = 'Husky.js';
const cicd = 'CI/CD';

// Development Apporaches (techniques)

const rwd = 'Responsive Web Design';
const mobileFirst = 'Mobile First';
const desktopFirst = 'Desktop First';
const pixel = 'Pixel Perfect';


const projectsData: Array<ProjectSummaryType> = [
  {
    title: 'Easybank Landing Page',
    mockupPath: 'easybank-mockup.png',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}, ${pixel}`,
    stack: `${docker}, ${vitejs}, ${reactjs}, ${typescript}, ${sass}, ${cssModules}`,
    // webType: 'Single Page Aplication (SPA)',
    renderType: 'Client Side Rendering (CSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Mini Shop',
    mockupPath:  'mini-shop.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: `${nextjs}, ${reactjs}, ${typescript}, Context-API, Styled-Components,  ${sass}, Flexbox, Grid CSS, Responsive Web Design`,
    // webType: 'Single Page Aplication (SPA)',
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
    developmentApproaches: 'Mobile First',
    stack: ` ${reactjs}, ${typescript}, Redux, Redux-Saga, React-router-dom, Sass/scss, Flexbox, Responsive Web Design`,
    // webType: 'Single Page Aplication (SPA)',
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
    title: 'RESTful API + Documentación',
    mockupPath:  'todo-api.png',
    category: categories[1],
    stack: 'Docker, Node.js, Express.js, Javascript, MongoDB Atlas, Jest, Supertest, Swagger, OpenAPI v3',
    // renderType: 'Server Side Rendering (SSR)',
    sourceCodeURL: 'https://github.com/rodolfomayora/todo-api',
    deployURL: 'https://todo-api.fly.dev/api/v1/docs',
    deploymentPlatform: 'Fly.io',
  },
  {
    title: 'Sunnyside Agency Landing Page',
    mockupPath: 'sunnyside-landing-page.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: `${html}, ${css}, ${javascript}, ${rwd}, ${pixel}`,
    renderType: 'Estatic',
    sourceCodeURL: 'https://github.com/rodolfomayora/sunnyside-agency-landing-page-main',
    deployURL: 'https://rodolfomayora.github.io/sunnyside-agency-landing-page-main',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Blogr Landing Page',
    mockupPath: 'blogr-mockup.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: `${nextjs}, ${reactjs}, ${typescript}, ${sass}, Flexbox, Responsive Web Design`,
    // webType: 'Landing Page',
    renderType: 'Server Side Rendering (SSR) + Hydration',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://my-blogr-landing-page.vercel.app',
    deploymentPlatform: 'Vercel',
  },
  {
    title: 'Insure Landing Page',
    mockupPath: 'insure-mockup.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: 'HTML, Sass/scss, JavaScript, Responsive Web Design',
    renderType: 'Static',
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Testimonials Grid Section',
    mockupPath: 'testimonial-mockup.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: 'ReactJS, TypeScript, CSS-Modules, Responsive Web Design',
    renderType: 'Static',
    sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
    deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section',
    deploymentPlatform: 'Github Pages',
  },
  {
    title: 'Article Preview Component',
    mockupPath: 'article-preview-mockup.png',
    category: categories[0],
    developmentApproaches: 'Mobile First',
    stack: 'HTML, CSS, JavaScript, Responsive Web Design',
    renderType: 'Static',
    sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
    deployURL: 'https://rodolfomayora.github.io/article-preview-component',
    deploymentPlatform: 'Github Pages',
  },
  
  
  // {
  //   title: '',
  //   mockupPath:  '',
  //   category: '',
  //   developmentApproaches: '',
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