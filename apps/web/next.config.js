const path = require('path');

const withTM = require("next-transpile-modules")([
  "@omariosouto/commons",
]);

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    
    if (IS_DEVELOPMENT) {
      config.resolve.alias['react'] = path.resolve(__dirname, '..', '..', 'node_modules', 'react');
    }
    return config;
  }
});
