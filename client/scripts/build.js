import fsExtra from 'fs-extra';
import path from 'path';
import webpack from 'webpack';
import config from '../../webpack.config.babel';
import { DIR_DIST } from '../config/_config';

fsExtra.emptyDirSync(path.resolve(DIR_DIST, 'images'));
fsExtra.emptyDirSync(path.resolve(DIR_DIST, 'javascripts'));
fsExtra.emptyDirSync(path.resolve(DIR_DIST, 'stylesheets'));

console.log('Starting build...');

webpack(config).run((err) => {
  if (err) {
    console.error('Error building', err);
  } else {
    console.log('Finished build');
  }
});
