const path = require('path');

const nextConfig = {
  // your config

  // webpack config
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');

    return config;
  },
};

module.exports = nextConfig;
