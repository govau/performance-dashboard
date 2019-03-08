import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
// import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import chalk from 'chalk';
import clearConsole from 'react-dev-utils/clearConsole';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import openBrowser from 'react-dev-utils/openBrowser';
import * as CONFIG from './../config/_config';
import webpackConfig from './../config/webpack.config.devserver';

// start: alter webpackConfig to play nicely with dev-server

let devServerPublicPath = `http://${CONFIG.WEBPACK_HOST}:${
  CONFIG.WEBPACK_PORT
}/`;
webpackConfig.output.publicPath = devServerPublicPath;

// same as --inline
// webpack/hot/dev-server will reload the entire page if the HMR update fails.
// If you want to reload the page on your own, you can add
// webpack/hot/only-dev-server to the entry point instead.
for (let [key, value] of Object.entries(webpackConfig.entry)) {
  if (!Array.isArray(value)) {
    throw new Error('Entry value must be an array');
  }
  value.unshift(
    // `webpack-dev-server/client?${devServerPublicPath}`,
    // 'webpack/hot/dev-server',    // reload if HMR fails
    require.resolve('./../scripts/webpackHotDevClient'), // todo !!
    // app entry point is not required here because it is carried across
    // from webpack.config, hence "unshift".
  );
}

// same as: --hot
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new CaseSensitivePathsPlugin());
// webpackConfig.plugins.push(new WatchMissingNodeModulesPlugin(CONFIG.DIR_NPM));
// webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
//   name: 'editor-vendor',
//   chunks: ["editor"],
//   minChunks(module, count) {
//     var context = module.context;
//     return context && [
//         'node_modules/react',
//         'node_modules/react-dom',
//         'node_modules/react-redux',
//         'node_modules/redux',
//         'node_modules/redux-jsonschema-form',
//         'node_modules/jsonschema',
//         'node_modules/react-router',
//         'node_modules/history',
//         'node_modules/validator',
//         'node_modules/lodash'
//       ].find(substr => context.indexOf(substr) >= 0);
//   }
// }));

// create an instance of webpack compiler
var compiler = webpack(webpackConfig);

// "invalid" event fires when you have changed a file, and Webpack is
// recompiling a bundle. WebpackDevServer takes care to pause serving the
// bundle, so if you refresh, it'll wait instead of serving the old one.
// "invalid" is short for "bundle invalidated", it doesn't imply any errors.
compiler.plugin('invalid', function() {
  clearConsole();
  console.log('Compiling...');
});

var isFirstCompile = true;

// "done" event fires when Webpack has finished recompiling the bundle.
// Whether or not you have warnings or errors, you will get this event.
compiler.plugin('done', function(stats) {
  clearConsole();

  // We have switched off the default Webpack output in WebpackDevServer
  // options so we are going to "massage" the warnings and errors and present
  // them in a readable focused way.
  var messages = formatWebpackMessages(stats.toJson({}, true));
  var isSuccessful = !messages.errors.length && !messages.warnings.length;
  var showInstructions = isSuccessful && isFirstCompile;

  if (isSuccessful) {
    console.log(chalk.green('Compiled successfully!'));
  }

  if (showInstructions) {
    console.log();
    console.log(
      `The app is listening at ${devServerPublicPath}, but develop on Rails server at ${chalk.cyan(
        'http://localhost:3000',
      )}.`,
    );
    console.log();
    console.log('Note that the development build is not optimized.');
    console.log(
      'To create a production build, use ' + chalk.cyan('yarn run build') + '.',
    );
    console.log();
    isFirstCompile = false;
  }

  // If errors exist, only show errors.
  if (messages.errors.length) {
    console.log(chalk.red('Failed to compile.'));
    console.log();
    messages.errors.forEach(message => {
      console.log(message);
      console.log();
    });
    return;
  }

  // Show warnings if no errors were found.
  if (messages.warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.'));
    console.log();
    messages.warnings.forEach(message => {
      console.log(message);
      console.log();
    });
    // Teach some ESLint tricks.
    console.log('You may use special comments to disable some warnings.');
    console.log(
      'Use ' +
        chalk.yellow('// eslint-disable-next-line') +
        ' to ignore the next line.',
    );
    console.log(
      'Use ' +
        chalk.yellow('/* eslint-disable */') +
        ' to ignore all warnings in a file.',
    );
  }
});

// create an instance of webpack-dev-server
let devServer = new WebpackDevServer(compiler, {
  // Enable gzip compression of generated files.
  compress: true,
  // Silence WebpackDevServer's own logs since they're generally not useful.
  // It will still show compile warnings and errors with this setting.
  clientLogLevel: 'none',
  // By default WebpackDevServer serves physical files from current directory
  // in addition to all the virtual build products that it serves from memory.
  // This is confusing because those files won’t automatically be available in
  // production build folder unless we copy them. However, copying the whole
  // project directory is dangerous because we may expose sensitive files.
  // Instead, we establish a convention that only files in `public` directory
  // get served. Our build script will copy `public` into the `build` folder.
  // In `index.html`, you can get URL of `public` folder with %PUBLIC_PATH%:
  // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  // In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
  // Note that we only recommend to use `public` folder as an escape hatch
  // for files like `favicon.ico`, `manifest.json`, and libraries that are
  // for some reason broken when imported through Webpack. If you just want to
  // use an image, put it in `src` and `import` it from JavaScript instead.
  // contentBase: CONFIG.DIR_DIST,
  publicPath: devServerPublicPath,
  hot: true,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,
  noInfo: false,
  quiet: true,
  stats: {
    colors: true,
  },
  // Reportedly, this avoids CPU overload on some systems.
  watchOptions: {
    ignored: /node_modules/,
  },
});

// bind the server to location and callback
devServer.listen(CONFIG.WEBPACK_PORT, CONFIG.WEBPACK_HOST, function(err) {
  if (err) {
    console.log(err);
  }
  clearConsole();

  console.log(chalk.cyan('Starting the development server...'));
  openBrowser('http://localhost:3000');
});

export default devServer;
