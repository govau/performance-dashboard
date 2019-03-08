import isDate from 'lodash/isDate';
import requirablePropType from './requirablePropType';

const validateIsDate = (props, propName, componentName) => {
  if (isDate(props[propName]) === false) {
    return new Error(`${componentName} requires that ${propName} be a Date`);
  }
};

export default {
  isDate: requirablePropType(validateIsDate),
};
