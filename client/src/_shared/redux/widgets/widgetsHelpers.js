
import isTypeOfState from './../../utils/isTypeOfState';

/**
 * Check if is of state type
 * @return {Boolean}
 */
export const isWidget = isTypeOfState(['row', 'pos', 'type', 'size', 'units']);


/**
 * Filters widgets by widget type for Below The Line Widgets
 * @param widgetType {String} widget.type
 * @returns {String|null} the type
 */
export const sanitizeBtlWidgetByType = widgetType => {
  const exclusions = [
    'kpi-sparkline',
    'fact',
    'full'
  ];
  if (exclusions.includes(widgetType) === false) {
    return 'time-series';
  }
  return null;
};


/**
 * @param widgets {Array} Widgets state
 * @param widget {Object} A Widget to *update* in state
 * @return {Array<Slices>} a new Array of Widgets State
 */
export const updateWidgetInWidgets = (widgets, widget) => {
  if (__DEV__) {
    if (isWidget(widget) === false) {
      throw new Error('Must provide widget');
    }
  }
  return widgets.map(w => {
    if (w.id == widget.id) {
      return {...w, ...widget};
    }
    return w;
  });
};
