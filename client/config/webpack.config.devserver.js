// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

import webpack from 'webpack';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import autoprefixer from 'autoprefixer';

import * as CONFIG from './_config';
const projectName = require('./../../package').name;

const NODE_ENV = String(process.env.NODE_ENV ? process.env.NODE_ENV : 'development');
const DEBUG = NODE_ENV === 'development';

let webpackConfig = {
	name: projectName,
  devtool: 'eval-source-map', 
	context: CONFIG.DIR_SRC,
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
    publicPath:  `/`,
    sourceMapFilename: "javascripts/[name].js.map"
	},
  externals: {
  },
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'babel-loader',
          'eslint-loader',
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              url: false,
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
              debug: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              url: false,
              minimize: false
              // modules: true
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: `$env: ${NODE_ENV};`,
              includePaths: [
                CONFIG.DIR_SRC,
                CONFIG.DIR_NPM
              ]
            }
          }
        ]
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
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      },
      __DEV__: DEBUG,
		}),
		new BellOnBundlerErrorPlugin()
	],
	resolve: {
		extensions : ['.js', '.scss']
	},
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

export default webpackConfig;
