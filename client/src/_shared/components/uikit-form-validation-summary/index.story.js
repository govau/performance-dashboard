
import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

import Summary from './index';


const Tmpl = ({errors}) => {
  return <Summary type="error" errors={errors} />;
};

storiesOf('Ui-kit Form Validation Summary', module)
  .add('with 1 error', () => <Tmpl errors={['error 1 text']} />)
  .add('with 2 errors', () => <Tmpl errors={['error 1 text', 'error 2 text']} />)
  .add('with 3 errors', () => <Tmpl errors={['error 1 text', 'error 2 text', 'error 3 text']} />)
;
