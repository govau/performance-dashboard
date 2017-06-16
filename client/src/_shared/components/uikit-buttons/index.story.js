import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';


const BtnTemplate = ({name, variant}) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>{name}</td><td><button className={`UIK-button btn btn-${variant}`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} (active)</td><td><button className={`UIK-button btn btn-${variant} active`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} (disabled)</td><td><button className={`UIK-button btn btn-${variant}`} disabled>Click me</button></td>
        </tr>
        <tr>
          <td>{name} Outline</td><td><button className={`UIK-button btn btn-outline-${variant}`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} small</td><td><button className={`UIK-button btn btn-${variant} btn-sm`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} large </td><td><button className={`UIK-button btn btn-${variant} btn-lg`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} block</td><td><button className={`UIK-button btn btn-${variant} btn-block`}>Click me</button></td>
        </tr>
        <tr>
          <td>{name} link</td><td><button className={`UIK-button btn btn-${variant} btn-link`}>Click me</button></td>
        </tr>
      </tbody>
    </table>
  )
};

storiesOf('Ui-kit Buttons', module)
  .add('Primary', () => <BtnTemplate name="Primary" variant="primary" />)
  .add('Secondary', () => <BtnTemplate name="Secondary" variant="secondary" />)
  .add('Success', () => <BtnTemplate name="Success" variant="success" />)
  .add('Info', () => <BtnTemplate name="Info" variant="info" />)
  .add('Warning', () => <BtnTemplate name="Warning" variant="warning" />)
  .add('Error', () => <BtnTemplate name="Error" variant="error" />)
;
