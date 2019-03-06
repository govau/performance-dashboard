/*
  Load environment variables from .env file. Suppress warnings using silent
  if this file is missing. dotenv will never modify any environment variables
  that have already been set.

  https://github.com/motdotla/dotenv
*/

require('dotenv').config({ silent: true });

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
// import autoprefixer from 'autoprefixer';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import * as CONFIG from './client/config/_config';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin')
// const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin')
const projectName = require('./package').name;
const NODE_ENV = String(process.env.NODE_ENV ? process.env.NODE_ENV : 'production');
const DEBUG = NODE_ENV === 'development';
const showVisualisation = false;
const assetsBaseUrl = 'https://dashboard.gov.au';
const revision = require('child_process').execSync('git rev-parse HEAD').toString().trim();

if (!DEBUG) {
  console.log();
  console.log('PREPARING FOR PRODUCTION');
}

console.log('Settings');
console.log('========');
console.log(`NODE_ENV: ${NODE_ENV}`);
console.log(`DEBUG: ${DEBUG}`);
console.log(`VERSION: ${revision}`);
console.log(`DIR DIST: ${CONFIG.DIR_DIST}`);
console.log(`ASSETS BASE URL: ${assetsBaseUrl}`);

let ExtractMcss = new ExtractTextPlugin({
  filename: 'stylesheets/[name]-mcss.css',
  // publicPath: CONFIG.DIR_DIST,
  publicPath: assetsBaseUrl,
  allChunks: false
});

let ExtractSass = new ExtractTextPlugin({
  filename: 'stylesheets/[name].css',
  // publicPath: CONFIG.DIR_DIST,
  publicPath: assetsBaseUrl,
  allChunks: false
});

let webpackConfig = {
  name: projectName,
  bail: true,
  devtool: 'source-map',
  target: 'web',
  context: CONFIG.DIR_SRC,
  entry: {
    ['dashboard']: [`./dashboard`],
    ['dashboard-index']: [`./dashboard-index`],
    ['app_shell']: [`./app_shell`],
    ['editor']: [`./editor`],
    ['login']: [`./login`],
  },
  output: {
    filename: 'javascripts/[name].min.js',
    // chunkFilename: 'javascripts/[name].js',
    path: CONFIG.DIR_DIST, // absolute - determines output dir
    sourceMapFilename: 'javascripts/[name].min.js.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'babel-loader',
          'eslint-loader'
        ],
      },
      {
        test: /\.(js)$/,
        loaders: ['babel-loader'],
        exclude: [
          CONFIG.DIR_NPM,
          CONFIG.DIR_TEST
        ],
      },
      {
        test: /\.css$/,
        use: ExtractMcss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true
                // modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                debug: false,
                sourceMap: true
              },
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true
                // modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                debug: false,
                sourceMap: true
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false,
                data: `$env: ${NODE_ENV};`,
                includePaths: [
                  CONFIG.DIR_SRC,
                  CONFIG.DIR_NPM
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loaders: [
          'file-loader?name=/images/[name].[ext]?[hash]'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map',
    //   publicPath: `${assetsBaseUrl}/`,
    // }),
    // new RollbarSourceMapPlugin({
    //   accessToken: process.env.ROLLBAR_ACCESS_TOKEN_SERVER,
    //   version: revision,
    //   publicPath: assetsBaseUrl
    // }),
    new GitRevisionPlugin(),
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
      name: 'editor-vendor',
      chunks: ['editor'],
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
  resolve: {
    extensions : ['.js', '.scss'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

if (showVisualisation) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }));
}

export default webpackConfig;
