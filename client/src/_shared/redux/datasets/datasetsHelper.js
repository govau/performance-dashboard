import isTypeOfState from './../../utils/isTypeOfState';

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isDataset = isTypeOfState(['name', 'label', 'units']);

export const getHumanisedUnits = units => {
  switch (units) {
    case 'n':
    case 's':
    case 'i':
      return '';
    case '%':
    case '$':
      return units;
    default:
      throw new Error('Units provided do not match those available');
  }
};

/**
 * @param datasets {Array} Datasets state
 * @param dataset {Object} A Dataset to *update* in state
 * @return {Array} a new Array of Datasets State
 */
export const updateDatasetInDatasets = (datasets, dataset) => {
  if (__DEV__) {
    if (isDataset(dataset) === false) {
      throw new Error('Must provide dataset');
    }
  }
  return datasets.map(d => {
    if (d.id == dataset.id) {
      return { ...d, ...dataset };
    }
    return d;
  });
};
