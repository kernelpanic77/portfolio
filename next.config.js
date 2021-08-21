// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

module.exports = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '/',
  images: {
    loader: "imgix",
    path: "https://kernelpanic77.github.io/",
  },
}