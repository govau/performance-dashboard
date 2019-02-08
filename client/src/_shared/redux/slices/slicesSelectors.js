var subMonths = require('date-fns/sub_months');
var addMonths = require('date-fns/add_months');
var startOfMonth = require('date-fns/start_of_month');
var format = require('date-fns/format');
var differenceInMonths = require('date-fns/difference_in_months');
var lastDayOfMonth = require('date-fns/last_day_of_month');

import {selectDashboard} from './../dashboards/dashboardsSelectors';
import {selectWidget} from './../widgets/widgetsSelectors';
import {selectDatasetsByWidget} from './../datasets/datasetsSelectors';

export const formatDateWithoutTimezoneData = date => {
  return format(new Date(date), 'YYYY-MM-DD');
};

export const formatDateWithoutTimezoneDataForSegment = date => {
  return format(new Date(date), 'YYYY-MM');
};

export const formatDateStartOfPeriod = (date, period = 'month') => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getPeriodStart.');
  }
  let d = new Date(date);
  d = new Date(d.getFullYear(), d.getMonth(), 1);
  return format(d, 'YYYY-MM-DD');
};

export const formatDateEndOfPeriod = (date, period = 'month') => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getPeriodStart.');
  }
  return format(lastDayOfMonth(new Date(date)), 'YYYY-MM-DD');
};

const getPeriodStart = (dateInPeriod = new Date(), period = 'month') => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getPeriodStart.');
  }
  const firstDateHashForPreviousPeriod = startOfMonth(subMonths(dateInPeriod, 1));
  return formatDateWithoutTimezoneData(firstDateHashForPreviousPeriod);
};

const getPeriodEnd = (dateInPeriod = new Date(), period = 'month') => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getPeriodStart.');
  }
  return format(lastDayOfMonth(new Date(dateInPeriod)), 'YYYY-MM-DD');
};

const compareDateEquality = (date1, date2) => {
  return format(new Date(date1), 'YYYY-MM-DD') === format(new Date(date2), 'YYYY-MM-DD');
};

export const getPrevPeriod = (periodStart, period = 'month', isUrlSegment = true) => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getPrevPeriod.');
  }
  return isUrlSegment ?
    formatDateWithoutTimezoneDataForSegment(subMonths(periodStart, 1)) :
    formatDateWithoutTimezoneData(subMonths(periodStart, 1));
};

export const getNextPeriod = (periodStart, period = 'month', isUrlSegment = true) => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getNextPeriod.');
  }
  return isUrlSegment ?
    formatDateWithoutTimezoneDataForSegment(addMonths(periodStart, 1)) :
    formatDateWithoutTimezoneData(addMonths(periodStart, 1));
};

export const getNumMonthsBetweenLastUpdatedAndLatestPossible = (dateLastUpdated, period = 'month') => {
  if (period !== 'month') {
    throw new Error('That period is not yet handled by getNumOfMonthsBetweenLatest.');
  }
  const latest = getPeriodStart();
  return differenceInMonths(new Date(latest), new Date(dateLastUpdated));
};

export const isPeriodInTheFuture = (nextPeriodDate, period = 'month') => {
  if (period !== 'month') {
    throw new Error('period other than month not yet handled by isPeriodInTheFuture');
  }
  const max = getPeriodEnd(subMonths(new Date(), 1));
  return new Date(max).getTime() < new Date(nextPeriodDate).getTime();
};


// Helpers

export const isEmptySlice = slice => {
  return slice.groups.every(g => {
    return typeof g.value === 'undefined';
  });
};

export const isLatestSlice = slice => {
  const latest = getPeriodStart();
  return compareDateEquality(slice.period_start, latest);
};

export const reachedLimitSeriesMin = (seriesStart, periodStart) => {
  return formatDateWithoutTimezoneData(seriesStart) > formatDateWithoutTimezoneData(new Date(periodStart));
};

export const reachedLimitSeriesMax = (seriesEnd, periodStart) => {
  return formatDateWithoutTimezoneData(seriesEnd) < formatDateWithoutTimezoneData(new Date(periodStart));
};

export const compareSliceEquality = (sliceA, sliceB) => {
  return sliceA.widget_id == sliceB.widget_id &&
      sliceA.period == sliceB.period &&
      compareDateEquality(sliceA.period_start, sliceB.period_start);
};



// Selectors

/*

 Slice:

   {
     "widget_id": 123,
     "dashboard_id": 123,
     "period": "month",
     "period_start": "20160101T12:00:00Z",
     "period_end": "20170101T12:00:00Z",
     "groups": [
       { "dataset_id": 123, "value": 400 },
       { "dataset_id": 124, "value": 500 }
     ]
   }

 Denormalized Slice:

   {
     "widget": <Widget>,
     "dashboard": <Dashboard>,
     "period": "month",
     "period_start": "20160101T12:00:00Z",
     "period_end": "20170101T12:00:00Z",
     "groups": [
       { "dataset": <Dataset>, "value": 400 },
       { "dataset": <Dataset>, "value": 500 }
     ]
   }

 */

// SLICE OPERATIONS

/** @returns {Object.<Slice>} - a slice */
export const selectWidgetSlice = (state, {widgetId, periodStart, periodEnd, period = 'month'}) => {
  if (periodStart) {
    return state.slices.find(slice => {
      return slice.widget_id == widgetId &&
        slice.period === period &&
        compareDateEquality(slice.period_start, periodStart);
    }) || null;
  }

  periodStart = getPeriodStart();

  // get all the slices with widgetId and same period
  const widgetSlices = state.slices.filter(s => {
    return s.period === 'custom' || (s.widget_id == widgetId && s.period == period);
  });

  // if there is not slice data for a widget, return
  if (!widgetSlices.length) {
    return null;
  }

  // if I can match the requested periodStart exactly, return it
  const periodSlice = widgetSlices.find(s => {
    return compareDateEquality(s.period_start, periodStart);
  });

  if (periodSlice) {
    return periodSlice;
  }

  // else return the next most recent slice, instead of an empty period slice
  // order by newest then get the top one
  const nextLatestSlice = widgetSlices.sort((a,b) => {  // sort by number
    return new Date(b.period_start).getTime() - new Date(a.period_start).getTime();
  })[0];

  if (nextLatestSlice) {
    return nextLatestSlice
  }

  return null;
};

/** @returns {Object.<Slice>} - a slice without data */
export const selectWidgetEmptySlice = (state, {widgetId, datagroupKey, period = 'month'}) => {
  return {
    widgetId,
    periodStart: formatDateStartOfPeriod(datagroupKey, period),
    periodEnd: formatDateEndOfPeriod(datagroupKey, period),
    period
  }
};

/** @returns {Array.<Slice>} - a collection of slice from many widgets at the same point in time */
export const selectWidgetsSlice = (state, {widgetsIds, periodStart, periodEnd, period = 'month'}) => {
  return widgetsIds.map(widgetId => {
    return selectWidgetSlice(state, {widgetId, periodStart, periodEnd, period})
  });
};

/** @returns {Array.<Slices>} - a collection of slices from a widget */
export const selectWidgetSlices = (state, {widgetId, periodStart, periodEnd, period = 'month'}) => {
  return state.slices
    .filter(slice => {
      return slice.widget_id == widgetId; // ==
    })
    .filter(slice => {
      return slice.period === period &&
        (typeof periodStart !== 'undefined' ? slice.period_start <= periodStart : true) &&
        (typeof periodEnd !== 'undefined' ? slice.period_end <= periodEnd : true);
    });
};



export const filterSlicesByHero = (slices) => {
  return slices.filter(slice => {
    return slice !== null && slice.widget.type === 'full';
  });
};

export const filterSlicesByBtl = (slices) => {
  return slices.filter(slice => {
    return slice !== null && (slice.widget.type !== 'full' || slice.widget.type !== 'kpi-sparkline');
  });
};



// NORMALIZED AND DENORMALIZED SLICE OPERATIONS

// Jon todo: In redux state, the slices do not contain the correct data
//   Custom slices are uniquely identified by start date, and they all have the same start date
//   so we only have one not all. Look at the reducer.

/** fulfill a slice to contain denormalized values */
export const getDenormalizedSlice = (state, {widgetId, dashboardId, periodStart}) => {
  if (__DEV__) {
    if (!widgetId || !dashboardId) {
      throw new Error('must provide widgetId and dashboardId');
    }
  }

  const sliceState = selectWidgetSlice(state, {widgetId, periodStart});

  // console.log('slice state', sliceState);

  if (!sliceState) {
    return null;
  }

  const dashboardState = selectDashboard(state, {dashboardId});
  const widgetState = selectWidget(state, {widgetId});
  const widgetDatasetsState = selectDatasetsByWidget(state, {widgetId});

  return {
    dashboard: dashboardState,
    widget: widgetState,
    period: sliceState.period,
    period_start: sliceState.period_start,
    period_end: sliceState.period_end,
    row_label: sliceState.row_label,
    groups: sliceState.groups.map(g => { // An array of [ dataset, value ]
      return {
        dataset: widgetDatasetsState.find(d => {
          return g.dataset_id == d.id;
        }),
        value: g.value
      }
    })
  };
};

/** fulfill an empty slice to contain denormalized values */
export const getEmptyDenormalizedSlice = (state, {widgetId, dashboardId, datagroupKey}) => {
  const sliceState = selectWidgetEmptySlice(state, {widgetId, datagroupKey});
  const dashboardState = selectDashboard(state, {dashboardId});
  const widgetState = selectWidget(state, {widgetId});
  const widgetDatasetsState = selectDatasetsByWidget(state, {widgetId});

  return {
    dashboard: dashboardState,
    widget: widgetState,
    period: sliceState.period,
    period_start: sliceState.periodStart,
    period_end: sliceState.periodEnd,
    groups: widgetDatasetsState.map(d => {
      return {
        dataset: d,
        value: void 0 // not null because null is a value
      }
    })
  };
};

/*

  // get 1 most recent denormalized slices per widget
  const denormalizedSlices = dashboardWidgets.filter(widget => {
    return widget.type !== 'fact';
  }).map(widget =>
    getDenormalizedSlice(
      state,
      { widgetId: widget.id, dashboardId: dashboard.id },
    )
  );

*/

// todo: consider removing this
// gets all slices given state by a widget
export const getDenormalizedSlices = (state, {widget, dashboard}) => {
  const widgetSlices = state.slices.filter(slice => {
    return slice.widget_id === widget.id;
  });

  return widgetSlices.map(slice => {
    console.log('Considering slice', slice);

    return {
      dashboard: dashboard,
      widget: widget,
      period: slice.period,
      period_start: slice.period_start,
      period_end: slice.period_end,
      // row_label: '',
      groups: slice.groups.map(g => {
        return {
          dataset: state.datasets.find(d => {
            return g.dataset_id == d.id;  // ==
          }),
          value: g.value
        }
      })
    }
  });
};


/** unfulfill a denormalized slice to contain normalized values */
export const normalizeSlice = slice => {
  return {
    widget_id: slice.widget.id,
    dashboard_id: slice.dashboard.id,
    period: slice.period,
    period_start: slice.period_start,
    period_end: slice.period_end,
    groups: slice.groups.map(g => {
      return {
        dataset_id: g.dataset.id,
        value: g.value
      }
    })
  }
};
