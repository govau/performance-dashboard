/**
 * Takes a value and returns a stringified Number to 2 decimal places.
 * Or Null if value provided is invalid.
 * Does not round.
 * @param value {Number}
 * @returns {String|null}
 * Also consumed by ./formatCurrency::formatCurrency2dp
 */
export const formatPercentile2dp = value => {
  // test for whole number or float
  if (/^\d*$|^\d*.\d*$/.test(String(value)) === false) {
    console.warn(
      'Value provided to formatPercentile2dp is not a Number or stringified Number.',
    );
    return null;
  }
  let percentile = Number(value);
  return percentile.toFixed(2);
};
