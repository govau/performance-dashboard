import isObject from 'lodash/isObject';

/**
 * Produce a function that can check an items' type against
 * reasonable assumptions
 * @param propertyKeys {Array} expected keys of a state item
 * @return {function(*=)}
 *
 * @usage:
 * const isDataset = isTypeOfState(['datapoints', 'units', 'label']);
 *
 */
const isTypeOfState = propertyKeys => {
  return record => {
    if (isObject(record) === false) {
      return false;
    }
    let actualKeys = Object.keys(record);
    return propertyKeys.every(k => actualKeys.includes(k));
  };
};

export default isTypeOfState;
