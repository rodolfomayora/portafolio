type Category = 'frontend' | 'backend' | 'tool' | 'testing'
export const technologies: { name: string, imageSource: string, description?: string, category: Category }[] = [
  // Frontend Technologies
  {
    name: 'HTML',
    imageSource: '/icons/svg/html.svg',
    category: 'frontend',
  },
  {
    name: 'CSS',
    imageSource: '/icons/svg/css.svg',
    category: 'frontend',
  },
  {
    name: 'Sass/SCSS',
    imageSource: '/icons/svg/sass.svg',
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    imageSource: '/icons/svg/javascript.svg',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    imageSource: '/icons/svg/typescript.svg',
    category: 'frontend',
  },
  {
    name: 'React.js',
    imageSource: '/icons/svg/react.svg',
    category: 'frontend',
  },
  {
    name: 'Next.js',
    imageSource: '/icons/svg/nextjs.svg',
    category: 'frontend',
  },
  {
    name: 'Redux Toolkit',
    imageSource: '/icons/svg/redux.svg',
    category: 'frontend',
  },
  {
    name: 'Vite.js',
    imageSource: '/icons/svg/vitejs.svg',
    category: 'frontend',
  },
  // Backend Technologies
  {
    name: 'Node.js',
    imageSource: '/icons/svg/node.svg',
    category: 'backend',
  },
  {
    name: 'Express.js',
    imageSource: '/icons/svg/expressjs.svg',
    category: 'backend',
  },
  {
    name: 'Nest.js',
    imageSource: '/icons/svg/nestjs.svg',
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    imageSource: '/icons/svg/postgresql.svg',
    category: 'backend',
  },
  {
    name: 'MongoDB',
    imageSource: '/icons/svg/mongodb.svg',
    category: 'backend',
  },
  // DevOPs & Tools
  {
    name: 'Docker',
    imageSource: '/icons/svg/docker.svg',
    category: 'tool',
  },
  // {
  //   name: 'Corepack',
  //   imageSource: '/icons/svg/corepack.svg',
  //   category: '',
  //   description: 'Manages multiple package managers efficiently.',
  // },
  {
    name: 'Git',
    imageSource: '/icons/svg/git.svg',
    category: 'tool',
  },
  {
    name: 'Ubuntu',
    imageSource: '/icons/svg/ubuntu.svg',
    category: 'tool',
  },
  // Testing & Debugging
  // {
  //   name: 'Jest',
  //   imageSource: '/icons/svg/jest.svg',
  //   category: 'testing',
  //   description: 'JavaScript testing framework for unit tests.',
  // },
  // {
  //   name: 'Vitest',
  //   imageSource: '/icons/svg/vitest.svg',
  //   category: 'testing',
  // },
  // {
  //   name: 'Testing Library',
  //   imageSource: '/icons/svg/testing-library.svg',
  //   category: 'testing',
  // },
  // {
  //   name: 'Mock Service Worker',
  //   imageSource: '/icons/svg/mswjs.svg',
  //   category: 'testing',
  //   description: 'Mocks API calls during testing.'
  // },
  // {
  //   name: 'Playwright',
  //   imageSource: '/icons/svg/playwright.svg',
  //   category: 'testing',
  //   description: 'End-to-end testing framework.',
  // },
  // Miscellaneous Tools
  {
    name: 'VSCode',
    imageSource: '/icons/svg/vscode.svg',
    category: 'tool',
    description: 'Widely-used code editor.'
  },
  {
    name: 'Dbeaver DB Client',
    imageSource: '/icons/svg/dbeaver.svg',
    category: 'tool',
    description: 'Tool for Database Management.'
  },
  {
    name: 'Bruno HTTP Client',
    imageSource: '/icons/svg/bruno.svg',
    category: 'tool',
    description: 'Tool for API testing.'
  },
  // {
  //   name: 'Husky.js',
  //   imageSource: '/icons/svg/husky.svg',
  //   category: 'tool',
  //   description: 'Git hooks manager to enforce rules.',
  // },
];