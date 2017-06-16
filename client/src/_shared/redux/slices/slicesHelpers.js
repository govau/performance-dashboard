
import {compareSliceEquality} from './slicesSelectors';
import isTypeOfState from './../../utils/isTypeOfState';


/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isSlice = isTypeOfState(['widget_id', 'dashboard_id', 'groups']);


/**
 * @param slices {Array} Slices state
 * @param slice {Object} A normalized Slice to *update* in state
 * @return {Array<Slices>} a new Array of Slices State
 */
export const updateSliceinSlices = (slices, slice) => {
  if (__DEV__) {
    if (isSlice(slice) === false) {
      throw new Error('Must provide slice');
    }
  }
  return slices.map(s => {
    if (compareSliceEquality(s, slice)) {
      return {...s, ...slice};
    }
    return s;
  });
};

/**
 * @param slices {Array} Slices state
 * @param slice {Object} A normalized Slice to *add to* state
 * @return {Array} a new Array of Slices State
 */
export const createSliceinSlices = (slices, slice) => {
  if (__DEV__) {
    if (isSlice(slice) === false) {
      throw new Error('Must provide slice');
    }
  }
  return [...slices, slice];
};
