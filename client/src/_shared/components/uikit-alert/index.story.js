import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text as knobText, boolean, number } from '@kadira/storybook-addon-knobs';

import UikitAlert from './index';


const AlertTmpl = ({type, text}) => {
  return <UikitAlert type={type} text={knobText('text', text)} />;
};

storiesOf('Ui-kit Alert', module)
  .add('with type success', () => <AlertTmpl type="success" text='Bacon ipsum lorem' />)
  .add('with type error', () => <AlertTmpl type="error" text='Bacon ipsum lorem' />)
  .add('with type info', () => <AlertTmpl type="info" text='Bacon ipsum lorem' />)
  .add('with type warning', () => <AlertTmpl type="warning" text='Bacon ipsum lorem' />)
;
