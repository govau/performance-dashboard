const path = require('path');

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');


module.exports = function(config, env) {

  var config = genDefaultConfig(config, env);

  // Extend it as you need.

  config.module.loaders = [...config.module.loaders,
    {
      test: /\.scss$/,
      loaders: ["style", "css", "resolve-url", "sass?sourceMap"],
    }
  ];

  config.resolve.extensions = [...config.resolve.extensions, '.scss'];

  return config;
};
