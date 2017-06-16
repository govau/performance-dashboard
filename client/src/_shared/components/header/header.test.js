
/* global it, describe */
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';


describe('(Components) Header - header ', () => {
  it('should match Snapshot', () => {
    const renderedValue =  renderer.create(<Header />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
