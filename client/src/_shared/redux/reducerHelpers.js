export const bindReducer = (reducer, initialState) => (state, action) => {
  if (typeof state === 'undefined' && typeof initialState === 'undefined') {
    throw new Error('Must provide state or initialState.');
  }
  return reducer(state || initialState, action);
};
