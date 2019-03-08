import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

/**
 * Will build a connected *shallow* or *deep* component for Enzyme testing
 * @param Component {Element} the Component or Container to test
 * @param state {Object}
 * @param props {Object}
 * @param deep {Boolean}
 * @returns {Enzyme}
 */
const buildConnectedSubject = (
  Component,
  state = {},
  props = {},
  deep = false,
) => {
  const mockStore = configureStore();

  const ComposedComponent = () => (
    <Provider store={mockStore(state)}>
      <Component {...props} />
    </Provider>
  );
  return deep ? mount(<ComposedComponent />) : shallow(<ComposedComponent />);
};

export default buildConnectedSubject;
