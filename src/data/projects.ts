import ProjectSummaryType from '../models/ProjectSummaryType';

const categories = Object.freeze(['Frontend', 'Backend']);

const html = 'HTML';
const css = 'CSS';
const javascript = 'JavaScript';
const typescript = 'TypeScript';
const sass = 'Sass/SCSS';
const cssModules = 'CSS Modules';
const tailwindCSS = 'Tailwind CSS'
const reactjs = 'React.js';
const nextjs = 'Next.js';
const redux = 'Redux ToolKit';
const docker = 'Docker';
const vitejs = 'Vite.js';
const cicd = 'CI/CD';
const epxressjs = 'Express.js';
const nestjs = 'Nest.js';
const jest = 'Jest';
const vitest = 'Vitest';
const testingLibrary = 'Testing Library';
const msw = 'Mock Service Worker';
const axios = 'Axios';
const tanstackQuery = 'Tanstack Query (React Query)';

// Development Apporaches (techniques)
const rwd = 'Responsive Web Design';
const mobileFirst = 'Mobile First';
const desktopFirst = 'Desktop First';
const pixel = 'Pixel Perfect';
const cwv = 'Core Web Vitals';

// Render Patter
const staticPage = 'Static';
const CSR = 'Client Side Rendering (CSR)';
const SSR = 'Server Side Rendering (SSR)';
const SSG = 'Static Site Generation (SSG)';
const MPA = 'Multi Page Application (MPA)';

export const projectsData: Array<ProjectSummaryType> = [
  {
    id: crypto.randomUUID(),
    title: 'Easybank Landing Page',
    mockupPath: 'easybank-mockup',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}, ${pixel}, ${cwv}`,
    stack: [vitejs, reactjs, typescript, sass, vitest, testingLibrary, cicd, docker],
    // webType: 'Single Page Aplication (SPA)',
    renderPatter: SSG,
    pageSpeedReportURL: 'https://pagespeed.web.dev/analysis/https-rodolfomayora-github-io-easybank-landing-page/fos3xnpt6s?form_factor=desktop',
    sourceCodeURL: 'https://github.com/rodolfomayora/easybank-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/easybank-landing-page',
    dockerhubURL: 'https://hub.docker.com/r/rodolfomayora/easybank',
    deploymentPlatform: 'Github Pages',
  },
  {
    id: crypto.randomUUID(),
    title: 'Rest Countries App',
    mockupPath:  'rest-countries-app',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}, ${pixel}, ${cwv}`,
    stack: [reactjs, tanstackQuery, typescript, sass, docker],
    // webType: 'Single Page Aplication (SPA)',
    renderPatter: CSR,
    sourceCodeURL: 'https://github.com/rodolfomayora/rest-countries.git',
    deployURL: 'https://my-rest-countries.vercel.app',
    deploymentPlatform: 'Vercel',
    apiIntegration: {
      name: 'REST Countries (public API)',
      url: 'https://restcountries.com/'
    },
  },
  {
    id: crypto.randomUUID(),
    title: 'Blogr Landing Page',
    mockupPath: 'blogr-mockup',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}, ${pixel}, ${cwv}`,
    stack: [nextjs, reactjs, typescript, sass, vitest, testingLibrary, docker],
    // webType: 'Landing Page',
    // renderPatter: 'Server Side Rendering (SSR) + Hydration',
    renderPatter: 'Pre-rendering + Hydration',
    sourceCodeURL: 'https://github.com/rodolfomayora/blogr-landing-page.git',
    deployURL: 'https://my-blogr-landing-page.vercel.app',
    deploymentPlatform: 'Vercel',
  },
  {
    id: crypto.randomUUID(),
    title: 'Mini Shop',
    mockupPath:  'mini-shop',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}`,
    stack: [nextjs, reactjs, typescript, tailwindCSS, vitest, testingLibrary, msw, docker],
    // webType: 'Single Page Aplication (SPA)',
    // renderPatter: 'Client Side Rendering (CSR)',
    renderPatter: 'Pre-rendering + Hydration',
    sourceCodeURL: 'https://github.com/rodolfomayora/mini-shop.git',
    deployURL: 'https://my-mini-shop.vercel.app',
    deploymentPlatform: 'Vercel',
    apiIntegration: {
      name: 'Fake Store (public API)',
      url: 'https://fakestoreapi.com'
    },
  },
  // {
  //   id: crypto.randomUUID(),
  //   title: 'RESTful API + Documentation',
  //   mockupPath:  'todo-api',
  //   category: categories[1],
  //   developmentApproaches: 'REST',
  //   stack: [docker, nodejs, epxressjs, javascript, 'MongoDB Atlas', jest, 'Supertest', 'Swagger', 'OpenAPI v3'],
  //   // renderPatter: 'Server Side Rendering (SSR)',
  //   sourceCodeURL: 'https://github.com/rodolfomayora/todo-api',
  //   deployURL: 'https://todo-api.fly.dev/api/v1/docs',
  //   deploymentPlatform: 'Fly.io',
  // },
  {
    id: crypto.randomUUID(),
    title: 'Sunnyside Agency Landing Page',
    mockupPath: 'sunnyside-landing-page',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}, ${pixel}`,
    stack: [html, css, javascript],
    renderPatter: staticPage,
    sourceCodeURL: 'https://github.com/rodolfomayora/sunnyside-agency-landing-page-main',
    deployURL: 'https://rodolfomayora.github.io/sunnyside-agency-landing-page-main',
    deploymentPlatform: 'Github Pages',
  },
  {
    id: crypto.randomUUID(),
    title: 'Insure Landing Page',
    mockupPath: 'insure-mockup',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}`,
    stack: [html, sass, javascript],
    renderPatter: staticPage,
    sourceCodeURL: 'https://github.com/rodolfomayora/insure-landing-page.git',
    deployURL: 'https://rodolfomayora.github.io/insure-landing-page',
    deploymentPlatform: 'Github Pages',
  },
  {
    id: crypto.randomUUID(),
    title: 'Testimonials Grid Section',
    mockupPath: 'testimonial-mockup',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}`,
    stack: [reactjs, typescript, cssModules],
    renderPatter: staticPage,
    sourceCodeURL: 'https://github.com/rodolfomayora/testimonials-grid-section.git',
    deployURL: 'https://rodolfomayora.github.io/testimonials-grid-section',
    deploymentPlatform: 'Github Pages',
  },
  {
    id: crypto.randomUUID(),
    title: 'Article Preview Component',
    mockupPath: 'article-preview-mockup',
    category: categories[0],
    developmentApproaches: `${rwd}, ${mobileFirst}`,
    stack: [html, css, javascript],
    renderPatter: staticPage,
    sourceCodeURL: 'https://github.com/rodolfomayora/article-preview-component.git',
    deployURL: 'https://rodolfomayora.github.io/article-preview-component',
    deploymentPlatform: 'Github Pages',
  },
];