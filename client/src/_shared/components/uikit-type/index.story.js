import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';


storiesOf('Ui-kit Type', module)
  .add('Default', () => (
    <table className="table">
      <tr>
        <td>h1</td><td><h1>Heading 1</h1></td>
      </tr>
      <tr>
        <td>h2</td><td><h2>Heading 2</h2></td>
      </tr>
      <tr>
        <td>h3</td><td><h3>Heading 3</h3></td>
      </tr>
      <tr>
        <td>h4</td><td><h4>Heading 4</h4></td>
      </tr>
      <tr>
        <td>h5</td><td><h5>Heading 5</h5></td>
      </tr>
      <tr>
        <td>h5</td><td><h6>Heading 6</h6></td>
      </tr>
      <tr>
        <td>Paragraph</td><td><p>Paragraph text</p></td>
      </tr>
      <tr>
        <td>Strong</td><td><strong>Strong text</strong></td>
      </tr>
    </table>
  ))
;
