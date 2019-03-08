/* global it, describe */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe('(Components) Footer - footer ', () => {
  it('should match Snapshot', () => {
    const renderedValue = renderer.create(<Footer />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
