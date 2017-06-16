import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';


const LinkTemplate = ({name}) => {
  return (
    <table className="table">
      <tr>
        <td>{name}</td><td><a className={`UIK-link`}>Click me</a></td>
      </tr>
      <tr>
        <td>{name} (disabled)</td><td><a className={`UIK-link`} disabled>Click me</a></td>
      </tr>
      <tr>
        <td>{name} (external)</td><td><a className={`UIK-link`} rel="external" target="blank">Click me</a></td>
      </tr>
    </table>
  )
};


storiesOf('Ui-kit Links', module)
  .add('Default', () => <LinkTemplate name="Default" />)
;
