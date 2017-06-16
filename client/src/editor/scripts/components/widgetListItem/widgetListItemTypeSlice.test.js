
/* global describe,it,beforeAll */
import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';

import WidgetTypeSlice from './widgetListItemTypeSlice';


describe('(Component) Widget Type Slice - widgetListItemTypeSlice', () => {

  // todo - propogate and rerun
  const props = {};

  const buildSubject = (props) => {
    return mount(<WidgetTypeSlice {...props}/>)
  };


  // require this because we can't do PropType validation with cloneElement
  it.skip('should render a widgetItem when required props are provided', () => {
    let item = buildSubject(props);
    expect(item.exists()).toBe(true);
  });

  it.skip('should shout at you if required props are not provided', () => {
    let stub;
    stub = sinon.stub(console, 'error');
    buildSubject();
    // emits error in console for PropType validation
    expect(stub.called).toBe(true);
    console.error.restore();
  });

});
