/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [
      require("path").join(__dirname, "styles"),
      require("path").join(__dirname, "components"),
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify webpack configuration here
    return config;
  },
};
