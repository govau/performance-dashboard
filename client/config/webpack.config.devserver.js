require('dotenv').config({ silent: true });

import webpack from 'webpack';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import autoprefixer from 'autoprefixer';

import * as CONFIG from './_config';
const projectName = require('./../../package').name;

const NODE_ENV = String(
  process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
);
const DEBUG = NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('Mode is ' + NODE_ENV);

let webpackConfig = {
  name: projectName,
  devtool: 'inline-source-map',
  context: CONFIG.DIR_SRC,
  mode: 'development',
  entry: {
    ['dashboard']: [`./dashboard`],
    ['dashboard-index']: [`./dashboard-index`],
    ['app_shell']: [`./app_shell`],
    ['editor']: [`./editor`],
    ['login']: [`./login`],
  },
  output: {
    path: CONFIG.DIR_DIST,
    pathinfo: true,
    filename: 'javascripts/[name].js',
    publicPath: `/`,
    sourceMapFilename: 'javascripts/[name].js.map',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel-loader'],
        exclude: [CONFIG.DIR_NPM, CONFIG.DIR_TEST],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: './images/',
            publicPath: '/images/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
      __DEV__: DEBUG,
    }),
    new BellOnBundlerErrorPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

export default webpackConfig;
