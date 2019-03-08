const format = require('date-fns/format');

export const dateFormats = {
  dateTime: date => new Date(date).getTime(),
  dayMonthYear: date => format(new Date(date), `d MMM 'YY`),
  monthYear: date => format(new Date(date), `MMM 'YY`),
  monthLongYear: date => format(new Date(date), `MMM YYYY`),
};

export const LONG_DATE = 'dddd D MMMM, YYYY';
export const SHORT_DATE = 'DD MMM YYYY';
export const VERY_SHORT_DATE = 'MMM YYYY';
export const EXTREMELY_SHORT_DATE = "MMM 'YY";
export const DATE_HASH = 'YYYY-MM';
export const MONTH_EXPANDED = 'MMMM';
export const SHORT_MONTH = 'MMM';

// semantic
export const DATE_HASH_LABEL = DATE_HASH;
export const DATAGROUP_KEY_ROUTE_SEGMENT = DATE_HASH;

export const formatDate = (date, dateFormat) => {
  return format(new Date(date), dateFormat);
};

export const humanisedLongDate = ts => {
  return format(new Date(ts), LONG_DATE);
};

export const humanisedShortDate = ts => {
  return format(new Date(ts), SHORT_DATE);
};

export const getHumanisedVeryShortDate = ts => {
  return format(new Date(ts), VERY_SHORT_DATE);
};

export const getHumanisedExtremelyShortDate = ts => {
  return format(new Date(ts), EXTREMELY_SHORT_DATE);
};

export const getHumanisedMonth = ts => {
  return format(new Date(ts), MONTH_EXPANDED);
};

export const getHumanisedShortMonth = ts => {
  return format(new Date(ts), SHORT_MONTH);
};

export const formatRoutingDatagroupKeyHash = date => {
  return format(new Date(date), DATE_HASH);
};

export const isDateInTheFuture = date => {
  const today = new Date();
  return today.getTime() < new Date(date).getTime();
};
