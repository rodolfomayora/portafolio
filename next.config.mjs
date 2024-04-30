/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx'],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    // localeDetection: false, // automatic locale detection
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      },
    ]
  },
};

export default nextConfig;
