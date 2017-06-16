
const fs = require('fs');
const babelJest = require('babel-jest');
const yaml = require('js-yaml');
const stripComments = require('strip-json-comments'); // this allows us to have comments

const babelConfigString = fs.readFileSync(require.resolve('./../../../.babelrc'), 'utf8');
const babelConfig = yaml.safeLoad(stripComments(babelConfigString));

module.exports = babelJest.createTransformer(babelConfig);
