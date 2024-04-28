/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx'],
  
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
        destination: '/inicio'
      },
    ]
  },
};

export default nextConfig;
