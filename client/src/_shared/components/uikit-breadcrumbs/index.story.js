import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';

import UikitBreadcrumbs from './index';


storiesOf('Ui-kit Breadcrumbs', module)
  .add('Default', () => (
    <UikitBreadcrumbs paths={[
      {path: '/', name:'Home'},
      {path: '/posts', name:`Posts`},
      {path: '/posts/2', name:`My story about Paella`}
    ]} />
  ))
;
