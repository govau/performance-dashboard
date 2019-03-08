/*
  Load environment variables from .env file. Suppress warnings using silent
  if this file is missing. dotenv will never modify any environment variables
  that have already been set.

  https://github.com/motdotla/dotenv

  https://blog.sentry.io/2018/10/18/4-reasons-why-your-source-maps-are-broken
*/

require("dotenv").config({ silent: true });

import webpack from "webpack";
import BellOnBundlerErrorPlugin from "bell-on-bundler-error-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import * as CONFIG from "./client/config/_config";
import path from "path";

const GitRevisionPlugin = require("git-revision-webpack-plugin");
const projectName = require("./package").name;
const NODE_ENV = String(
  process.env.NODE_ENV ? process.env.NODE_ENV : "production"
);
const DEBUG = NODE_ENV === "development";
const showVisualisation = false;
const assetsBaseUrl = "/";
const revision = require("child_process")
  .execSync("git rev-parse HEAD")
  .toString()
  .trim();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

console.log(`NODE_ENV: ${NODE_ENV}`);
console.log(`DEBUG: ${DEBUG}`);
console.log(`VERSION: ${revision}`);
console.log(`DIR DIST: ${CONFIG.DIR_DIST}`);
console.log(`ASSETS BASE URL: ${assetsBaseUrl}`);

let webpackConfig = {
  name: projectName,
  bail: true,
  devtool: "source-map",
  target: "web",
  context: CONFIG.DIR_SRC,
  mode: NODE_ENV,
  entry: {
    ["dashboard"]: [`./dashboard`],
    ["dashboard-index"]: [`./dashboard-index`],
    ["app_shell"]: [`./app_shell`],
    ["editor"]: [`./editor`],
    ["login"]: [`./login`]
  },
  output: {
    publicPath: assetsBaseUrl,
    filename: "javascripts/[name].js",
    path: path.join(__dirname, "public"),
    sourceMapFilename: "javascripts/[name].js.map"
    // devtoolModuleFilenameTemplate: "file://[absolute-resource-path]",
    // devtoolFallbackModuleFilenameTemplate: "file://[absolute-resource-path]?[hash]"
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash]",
            outputPath: "./images/",
            publicPath: "/images/"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(js)$/,
        loaders: ["babel-loader"],
        exclude: [CONFIG.DIR_NPM, CONFIG.DIR_TEST]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          "postcss-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      },
      __DEV__: DEBUG
    }),
    new GitRevisionPlugin(),
    new BellOnBundlerErrorPlugin(),
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
      chunkFilename: "stylesheets/[id].css",
      publicPath: assetsBaseUrl
    })
  ],
  resolve: {
    extensions: [".js", ".scss"]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};

if (showVisualisation) {
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static"
    })
  );
}

export default webpackConfig;
