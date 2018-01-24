
// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import autoprefixer from 'autoprefixer';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

import * as CONFIG from './client/config/_config';
const projectName = require('./package').name;


const NODE_ENV = String(process.env.NODE_ENV ? process.env.NODE_ENV : 'production');
const DEBUG = NODE_ENV === 'development';


const showVisualisation = false;

if (!DEBUG) {
  console.log();
  console.log('PREPARING FOR PRODUCTION');
}
console.log('Settings:');
console.log(`NODE_ENV: ${NODE_ENV}`);
console.log(`DEBUG: ${DEBUG}`);


// var shouldUseRelativeAssetPaths = './';
// // Note: defined here because it will be used more than once.
// const cssFilename = 'stylesheets/[name]-mcss.css';
//
// // ExtractTextPlugin expects the build output to be flat.
// // (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// // However, our output is structured with css, js and media folders.
// // To have this structure working with relative paths, we have to use custom options.
// const extractTextPluginOptions = shouldUseRelativeAssetPaths
//   // Making sure that the publicPath goes back to to build folder.
//   ? { publicPath: Array(cssFilename.split('/').length).join('../') }
//   : undefined;

let ExtractMcss = new ExtractTextPlugin("stylesheets/[name]-mcss.css", {
  publicPath: CONFIG.DIR_DIST,
  allChunks: false
});

let ExtractSass = new ExtractTextPlugin("stylesheets/[name].css", {
  publicPath: CONFIG.DIR_DIST,
  allChunks: false
});

let webpackConfig = {
  name: projectName,
  // don't attempt to continue if there are errors
  bail: true,
  debug: DEBUG,
  devtool: DEBUG ? 'source-map' : 'none',
  target: 'web',
  context: CONFIG.DIR_SRC,
  entry: {
    ['dashboard']: [`./dashboard`], // used in app/views/layouts/application.html.erb
    ['dashboard-index']: [`./dashboard-index`], // used in app/views/layouts/application.html.erb
    ['app_shell']: [`./app_shell`], // used in app/views/layouts/editor.html.erb and app/views/layouts/devise.html.erb
    ['editor']: [`./editor`], // used in app/views/layouts/editor.html.erb
    ['login']: [`./login`], // used in app/views/layouts/devise.html.erb
  },
  output: {
    filename: 'javascripts/[name].js',
    chunkFilename: 'javascripts/[name].js',
    path: CONFIG.DIR_DIST,    // absolute - determines output dir
    sourceMapFilename: "javascripts/[name].js.map"
  },
  // When you want to import a global API into the bundle
  externals: {
  },
  module: {
    // Pre-process files as they are loaded by "import" statements.
    // Similar to a gulp task.
    // Chains are applied right to left,
    // Can accept options by query params or by object syntax below,
    // see "loader options"
    // First, run the linter.
    // It's important to do this before Babel processes the JS.
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: CONFIG.DIR_SRC,
      }
    ],
    loaders: [
      {
        test: /\.(js)$/,
        loaders: ['babel'],
        exclude: [
          CONFIG.DIR_NPM,
          CONFIG.DIR_TEST
        ],
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      // The notation here is somewhat confusing.
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader normally turns CSS into JS modules injecting <style>,
      // but unlike in development configuration, we do something different.
      // `ExtractTextPlugin` first applies the "postcss" and "css" loaders
      // (second argument), then grabs the result CSS and puts it into a
      // separate file in our build process. This way we actually ship
      // a single CSS file in production instead of JS code injecting <style>
      // tags. If you use code splitting, however, any async bundles will still
      // use the "style" loader inside the async code so CSS from them won't be
      // in the main CSS file.
      {
        test: /\.css$/,
        loader: ExtractMcss.extract(
          'style',
          'css?importLoaders=1!postcss?sourceMap!postcss',
          // extractTextPluginOptions
        )
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
      {
        test: /\.(scss)$/,
        loader: ExtractSass.extract(
          'style', `css?${DEBUG ? 'sourceMap': ''}!postcss!resolve-url!sass?sourceMap`)
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loaders: [
          "file?name=/images/[name].[ext]?[hash]"
          // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]
      }
    ]
  },
  // Add functionality typically related to bundles in webpack
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      },
      __DEV__: DEBUG,
    }),
    new BellOnBundlerErrorPlugin(),
    ExtractSass,
    ExtractMcss,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'editor-vendor', // used in app/views/layouts/editor.html.erb
      chunks: ["editor"],
      minChunks(module, count) {
        var context = module.context;
        return context && [
            'node_modules/react',
            'node_modules/react-dom',
            'node_modules/react-redux',
            'node_modules/redux',
            'node_modules/redux-jsonschema-form',
            'node_modules/jsonschema',
            'node_modules/react-router',
            'node_modules/history',
            'node_modules/validator',
            'node_modules/lodash'
          ].find(substr => context.indexOf(substr) >= 0);
      }
    })
  ],
  // Options affecting the resolving of modules
  resolve: {
    extensions : ['', '.js', '.scss'],
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },


  //
  // loader options
  //

  postcss : [
    autoprefixer()
  ],
  sassLoader: {
    precision: 8,
    includePaths: [
      CONFIG.DIR_SRC,
      CONFIG.DIR_NPM
    ],
    sourceMap: DEBUG,
    lineNumbers: DEBUG,
    bundleExec: true,
    data: `$env: ${NODE_ENV};`
  },

};

if (!DEBUG) {
  webpackConfig.plugins.push(
    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // drop_debugger: false
      },
    })
  )
}

if (showVisualisation) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }));
}

export default webpackConfig;
