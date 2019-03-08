export const getWidgetType = widget => {
  const { type, options } = widget;

  if (type === 'fact') {
    return 'fact';
  }

  if (type === 'bar') {
    if (widget.name === 'How users find the dashboard') {
      // todo - fix data issue
      return 'stackedColumn';
    }
    if (options && options.stacking) {
      return 'stackedColumn';
    }
    return 'column';
  }

  if (type === 'pie') {
    return 'donut';
  }

  if (type === 'line') {
    return 'line';
  }

  if (type === 'sparkline') {
    return 'sparkline';
  }

  if (type === 'full') {
    return 'hero';
  }

  if (type === 'kpi-sparkline') {
    return 'kpi-count';
  }

  console.warn(`Widget of type "${type}" is not yet handled`);

  return;
};

export const isKpi = widgetType => {
  return widgetType === 'kpi-count' || widgetType === 'hero';
};

export const getWidgetCoordinatesType = widgetType => {
  if (widgetType === 'donut' || widgetType === 'pie') {
    return 'polar';
  }

  return 'cartesian';
};

export const getUnitsType = units => {
  if (units === '%') {
    return 'percentage';
  }

  if (units === 'n' || units === 'i') {
    return 'number';
  }

  if (units === 's') {
    return 'seconds';
  }

  if (units === '$') {
    return 'money';
  }

  if (units === 'f') {
    // fact
    return;
  }

  console.warn(`Widget with units "${units}" is not yet handled`);

  return;
};

export const getWidgetOptions = widget => {
  let res = {};

  const { options } = widget;

  if (typeof options === 'undefined' || options === null) {
    return res;
  }

  if (widget.name === 'How users find the dashboard') {
    res.stackingType = 'percent';
  }

  if (options.stacking) {
    if (options.stacking == 'percentage') {
      res.stackingType = 'percent';
    } else {
      res.stackingType = 'normal';
    }
  }

  // todo - displayRoundedData

  return res;
};
