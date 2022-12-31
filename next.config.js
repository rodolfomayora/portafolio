module.exports = {
  pageExtensions: ['page.ts', 'page.tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};