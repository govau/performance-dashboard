
import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';
import get from 'lodash/get';
import merge from 'lodash/merge';

import {getUnitsType} from './../utils/proposedApiChanges';
import {dateFormats} from 'shared/utils/formatDates';

import {makeGetBtlColorset, makeGetKpiColorset} from './getColors';
import {getWidgetType, getWidgetCoordinatesType} from 'shared/utils/proposedApiChanges';




/**
 *
 * todo - rename "section"
 *
 *
 * The Category appears in the legend, it represents a data series
 * The Section is the sequence of data within the data series
 *
 * series name are comparable groups - desktop/mobile
 * categories are slice names - dates
 *
 *
 */




const transformForHighcharts = (slices, isKpi = false) => {

  if (typeof slices === 'undefined' || slices.length === 0) {
    throw new Error('Must provide slices to transformForHighcharts.');
  }

  if (slices.some(s => typeof s.groups === 'undefined') === true) {
    throw new Error('Slice data must have group state.');
  }

  const slice = slices[0];
  const widget = slice.widget;
  const type = getWidgetType(widget);

  const config = {
    _type: type,
    _coordinatesType: getWidgetCoordinatesType(type),
    _isKpi: isKpi,
    chartTitle: widget.name,
    chartDescription: widget.description,
    chartUpdatedDate: widget.last_updated_at,
    _singleCategory: null,
    _singleSection: null,
    series: null,
    xAxis: null,
    yAxis: null,
  };

  const dataProps = get(config, '_coordinatesType') === 'polar' ?
    transformDataForPolar(config, slices) :
    transformDataForCartesian(config, slices);

  const mergedConfig = merge(config, dataProps);

  // sanitize
  for (const key in mergedConfig) {
    if (!key in config) {
      delete mergedConfig.key;
    }
  }

  return mergedConfig;
};


const transformDataForPolar = (config, slices) => {

  const recentSlices = [slices[slices.length - 1]];

  //
  // I have a series and the series has at least one or many data points
  //
  if (recentSlices.length === 1 && recentSlices[0].groups.length > 0) {
    return merge(polarSingleCategoryMultipleSections(config, recentSlices), {
      _singleCategory: true,
      _singleSection: false,
    });
  } else {

    if (__DEV__) {
      throw new Error('Invalid slice state for polar data type transformation.');
    } else {
      console.warn('Invalid slice state for polar data type transformation.');
    }
  }

};

const transformDataForCartesian = (config, slices) => {

  // single category  - slices.length === 1
  // single section   - slices[0].groups.length === 1

  // single category  - slices.length === 1
  // multiple section - slices[0].groups.length > 1

  // multiple category  - slices.length > 1
  // single section - slices[0].groups.length === 1

  // multiple category  - slices.length > 1
  // multiple section - slices[0].groups.length > 1

  if (slices.length === 1) {  // singular category

    const slice = slices[0];

    if (slice.groups.length > 1) { // multiple section

      return merge(cartesianSingleCategoryMultipleSections(config, slices), {
        _singleCategory: true,
        _singleSection: false,
        _coordinatesType: 'cartesian',
      });

    } else if (slice.groups.length === 1) {  // single section (column)

      return merge(cartesianSingleCategorySingleSection(config, slices), { // todo - think we can delete this
        _singleCategory: true,
        _singleSection: true,
        _coordinatesType: 'cartesian',
      });

    } else {

      if (__DEV__) {
        throw new Error(`No groups provided. You shouldn't be able to reach here.`);
      } else {
        console.warn(`No groups provided. You shouldn't be able to reach here.`);
      }
    }

  } else {  // multiple category

    const slice = slices[0];

    if (slice.groups.length > 1) { // multiple section

      return merge(cartesianMultipleCategoryMultipleSeries(config, slices), {
        _singleCategory: false,
        _singleSection: false,
        _coordinatesType: 'cartesian',
      });

    } else if (slice.groups.length === 1) { // single section (column)

      return merge(cartesianMultipleCategorySingleSeries(config, slices), {
        _singleCategory: false,
        _singleSection: true,
        _coordinatesType: 'cartesian',
      });

    } else {

      if (__DEV__) {
        throw new Error(`No groups provided. You shouldn't be able to reach here.`);
      } else {
        console.warn(`No groups provided. You shouldn't be able to reach here.`);
      }
    }

  }

};


/**
 * polarSingleCategoryMultipleSections
 *
 *
 * input:
    slices: [ // singular (CATEGORIES)
      {..., groups: [{}, {}, {}]}   // multiple/or singular (SERIES)
    ]

 * output:
     _singleCategory: true,
     _singleSection: false,
     series: [{
      "name": "Jan '17",
      "data": [
        {"name": "Mobile", "units": "n", "y": 183, "color": "#b6988f"}, // todo altColor: 'url(#hc-pat-1-2)' - highcontrast mode
        {"name": "Tablet", "units": "n", "y": 30, "color": "#46b4ba"},
        {"name": "Desktop", "units": "n", "y": 1009, "color": "#f17465"}
      ]
    }]

 {"series":[{"name":"Jan '17","data":[{"name":"Mobile","units":"n","y":183,"color":"#b6988f"},{"name":"Tablet","units":"n","y":30,"color":"#46b4ba"},{"name":"Desktop","units":"n","y":1009,"color":"#f17465"}]}]}
 */
const polarSingleCategoryMultipleSections = (config, slices) => {
  const position = get(slices[0], 'widget.pos');
  const getColor = config._isKpi === true ? makeGetKpiColorset() : makeGetBtlColorset(position);

  const c = {
    series: slices.map(s => { // there is only a single slice, but return Array
      return {
        name: dateFormats.monthYear(s.period_start),
        data: s.groups.map((g, idx) => {
          return {
            name: get(g, 'dataset.label'),
            units: get(g, 'dataset.units'),
            y: g.value,
            color: getColor(idx),
          }
        })
      }
    }),
  };

  // console.log(config._type, 'polarSingleCategoryMultipleSections', JSON.stringify(c))
  return c;
};


/**
 * cartesianSingleCategorySingleSection
 * a single column with a single section
 *
    title: {
      text: 'Single Category, Single Slice'
    },
    xAxis: {
      categories: ['category-1']
    },
    series: [ // sections
      {
        name: 'slice-1',
        data: [1]  // categories
      }
    ]
 *
 * @param slices {Array.<Object>}
 * @param passedProps {Object}
 * @returns {Object}
 */

const cartesianSingleCategorySingleSection = (config, slices) => {

  // todo
  console.warn('SLICE TYPE NOT YET SUPPORTED - EXPERIMENTAL .');
  // throw new Error('SLICE TYPE NOT YET SUPPORTED.');


  const position = slices[0].widget.pos;
  const getColor = config._isKpi === true ? makeGetKpiColorset() : makeGetBtlColorset(position);

  const c = {
    xAxis: {
      categories: [dateFormats.monthYear(slices[0].period_start)],
    },
    series: [
      {
        name: slices[0].groups[0].dataset.label,
        _unitsType: getUnitsType(slices[0].groups[0].dataset.units),
        units: slices[0].groups[0].dataset.unit,
        data: [slices[0].groups[0].value],
        color: getColor(0),
      }
    ]
  };

  console.log('transformSingleCategorySingleSection', c);
  return c;
};


/**
 *
 * cartesianSingleCategoryMultipleSections
 * a single column with multiple sections
 *
 * input:


 * output:
    title: {
      text: 'Single Category, Many Slice'
    },
    xAxis: {
      categories: ['category-1']
    },
    series: [ // sections
      {
        name: 'slice-1',
        data: [1]  // categories
      },
      {
        name: 'slice-2',
        data: [2]
      }
    ]
 *
 * @param slices
 * @param passedProps
 * @returns {Object}
 */

const cartesianSingleCategoryMultipleSections = (config, slices) => {

  // todo
  // throw new Error('SLICE TYPE NOT YET SUPPORTED.');
  console.warn('EXPERIMENTAL - SLICE TYPE NOT YET SUPPORTED.');

  const slice = slices[0];
  const position = slice.widget.pos;
  const getColor = config._isKpi === true ? makeGetKpiColorset() : makeGetBtlColorset(position);

  const c = {
    xAxis: [{
      categories: [dateFormats.monthYear(slice.period_start)],
    }],
    series: slice.groups.map((g, idx) => {
      return {
        name: g.dataset.label,
        units: g.dataset.units,
        _unitsType: getUnitsType(g.dataset.units),
        data: [g.value],
        color: getColor(idx),
      }
    }),
  };
  // console.log('cartesianSingleCategoryMultipleSections', c);
  return c;
};


/**
 *
 * input:


 * output:

 *
 * @param slices
 * @param passedProps
 * @returns {{yAxis: Array, xAxis: *[], series: Array}}
 */
// multiple columns with single sections
// title: {
//   text: 'Many Categories, Single Slice'
// },
// xAxis: {
//   categories: ['category-1', 'category-2', 'category-3', 'category-4']
// },
// series: [{ // sections
//   name: 'slice-1',
//   data: [1, 2, 2, 3] // categories
// }, ]


/**
 * cartesianMultipleCategorySingleSeries
 * Data like: for a single dataset, show me monthly data on 'Time taken to clear permits'
 *
 * input:
    slices: [ // (CATEGORIES)
      {..., groups: [{}]}   // singular (SERIES)
    ]
 *
 * output:
    {
      _singleCategory: false,
      _singleSection: true,
      yAxis: [{"title": {"text": ""}, "min": 37560}],
      xAxis: [{"categories": ["May '16", "Jun '16", "Jul '16", "Aug '16", "Sep '16", "Oct '16", "Nov '16"]}],
      series: [{
        name: "Time to clear",
        units: "i",
        data: [84807, 48317, 51420, 62400, 48060, 37560, 39300],
        color: "#4e9774",
      }
    }
 *
 * @param slices
 * @param passedProps
 * @returns {{yAxis: Array, xAxis: *[], series: Array}}
 */
const cartesianMultipleCategorySingleSeries = (config, slices) => {

  const position = slices[0].widget.pos;
  const getColor = config._isKpi === true ? makeGetKpiColorset() : makeGetBtlColorset(position);

  var multipleCategories = slices
    .map(s => s.groups)
    .map(groups => { // category
      return groups
        .filter((group, idx) => { // take the first only (there should only be one)
          return idx === 0;
        })
        .map(group => {
          return group.value;
        });
      });

  var singleSection = [slices[0].groups[0].dataset];


  var configSeries = singleSection.map((section, idx) => {
    return {
      name: section.label,
      // color: section.color,
      units: section.units,
      data: multipleCategories.map(c => c[idx]),
      color: config._isKpi === true ? getColor(position) : getColor(0),  // todo - this is a hack for kpi count widgets
    };
  });


  const minimumValue = configSeries[0].data
    .filter(val => {
      return val !== null;
    }).reduce((a,b) => {
      return a < b ? a : b;
    }, []);


  // todo - date formatting should happen in datavizkit not here
  var configXaxisCategories = slices.map(s => dateFormats.monthYear(s.period_start));

  const yAxesTitles = uniq(singleSection.map(g => g.units))
    .map(u => {
      if (u === '%') {
        return 'Percentage (%)';
      } else if (u === '$') {
        return 'AUD ($)';
      } else if (u === 's') {
        return 'Time (m:s)';
      } else {
        return '';
      }
    });

  const configYaxis = yAxesTitles.map(title => {
    const c = {
      title: {
        text: '',
      },
    };
    if (title === 'Percentage (%)') {
      c.floor = 0;
      c.ceiling = 100;
      c.min = 0;
      c.max = 100;
    } else {
      c.min = minimumValue;
    }
    return c;
  });

  const c = {
    yAxis: configYaxis,
    xAxis: [{
      categories: configXaxisCategories,
    }],
    series: configSeries
  };

  // console.log(config._type, 'cartesianMultipleCategorySingleSeries', JSON.stringify(c))
  return c;
};


// multiple columns with multiple sections
// title: {
//   text: 'Many Categories, Many Slice'
// },
// xAxis: {
//   categories: ['category-1', 'category-2', 'category-3', 'category-4']
// },
// series: [{ // sections
//   name: 'slice-1',
//   data: [1, 2, 2, 3] // categories
// }, {
//   name: 'slice-2',
//   data: [1, 2, 2, 3]
// }, ]

/**
 *
 * input:
     slices: [ // many (CATEGORIES)
      {..., groups: [{}, {}, {}]}   // many (SERIES)
     ]

 * output:
     _singleCategory: false,
     _singleSection: false,
     yAxis: [{"title": {"text": "Percentage (%)"}, "opposite": false, "floor": 0, "ceiling": 100, "min": 0, "max": 100}],
     xAxis: [{"categories": ["Nov '15", "Dec '15", "Jan '16", "Feb '16", "Mar '16", "Apr '16", "May '16", "Jun '16", "Jul '16", "Aug '16", "Sep '16", "Oct '16", "Nov '16"]}],
     series: [{
        "name": "1 service",
        "units": "%",
        "data": [59.56, 59.21, 58.72, 58.24, 57.84, 57.42, 56.98, 56.5, 55.83, 55.33, 54.9, 54.5, 54.1],
        "yAxis": 0,
        "color": "#0c7b92",
      }, {
        "name": "2 services",
        "units": "%",
        "data": [24.55, 24.7, 24.9, 25.09, 25.23, 25.38, 25.52, 25.64, 25.71, 25.77, 25.8, 25.9, 26.02],
        "yAxis": 0,
        "color": "#46b4ba",
      }, {
        "name": "3 services",
        "units": "%",
        "data": [11.19, 11.31, 11.48, 11.64, 11.79, 11.94, 12.11, 12.28, 12.58, 12.8, 13, 13.1, 13.27],
        "yAxis": 0,
        "color": "#c45d8e",
      }, {
        "name": "4 services",
        "units": "%",
        "data": [3.69, 3.74, 3.81, 3.89, 3.97, 4.05, 4.14, 4.25, 4.46, 4.61, 4.7, 4.8, 4.94],
        "yAxis": 0,
        "color": "#6d82dc",
      }, {
        "name": "5+ services",
        "units": "%",
        "data": [1.02, 1.05, 1.09, 1.13, 1.18, 1.22, 1.25, 1.32, 1.43, 1.5, 1.6, 1.6, 1.67],
        "yAxis": 0,
        "color": "#f17465",
      }]
 *
 * @param slices
 * @param passedProps
 * @returns {Object}
 */
const cartesianMultipleCategoryMultipleSeries = (config, slices) => {

  const position = slices[0].widget.pos;
  const getColor = config._isKpi === true ? makeGetKpiColorset() : makeGetBtlColorset(position);

  const multipleCategories = slices
    .map(s => s.groups)
    .map(groups => { // category
      return groups.map(group => {
        return group.value;
      });
    });


  const multipleSections = slices[0].groups.map(g => g.dataset);


  const yAxesTitles = uniq(multipleSections.map(g => g.units))
    .map(u => {
      if (u === '%') {
        return 'Percentage (%)';
      } else if (u === '$') {
        return 'AUD ($)';
      } else if (u === 's') {
        return 'Time (m:s)';
      } else {
        return ''
      }
    });

  var configSeries = multipleSections.map((section, idx) => {

    let yAxisIndex = findIndex(yAxesTitles, (title) => title.includes(section.units));

    const serie = {
      name: section.label,
      units: section.units,
      // color: section.color,
      data: multipleCategories.map(c => c[idx]),
      color: getColor(idx),
    };

    if (typeof yAxisIndex !== 'undefined' && yAxisIndex >= 0) {
      serie.yAxis = yAxisIndex;
    }
    return serie;
  });

  // shows minimum value of all data, not per axis
  const minimumValue = configSeries
    .map(s => s.data)
    .reduce((a,b) => {
      return [...a, ...b];
    }, [])
    .filter(val => {
      return val !== null;
    })
    .reduce((a,b) => {
      return a < b ? a : b;
    }, []);

  const configXaxisCategories = slices.map(s => dateFormats.monthYear(s.period_start));

  const configYaxis = yAxesTitles.map(title => {
    const c = {
      title: {
        text: title,
      },
      opposite: title === 'AUD ($)',
    };
    if (title === 'Percentage (%)') {
      c.floor = 0;
      c.ceiling = 100;
      c.min = 0;
      c.max = 100;
    }

    if (title === 'AUD ($)' || title === 'Time (m:s)') {

      // minimumValue of data series that are money
      const moneyValues = configSeries
        .filter(s => {
          return s.yAxis === 1;
        }).reduce((a,b) => {
          return [...a, ...b];
        }, [])
        .filter(val => {
          return val !== null;
        });

      if (moneyValues && moneyValues.length > 0) {
        c.min = moneyValues.reduce((a,b) => {
          return a < b ? a : b;
        });
      }
    }

    return c;
  });

  const c = {
    yAxis: configYaxis,
    xAxis: [{
      categories: configXaxisCategories,
    }],
    series: configSeries
  };

  // console.log(config._type, 'cartesianMultipleCategoryMultipleSeries', JSON.stringify(c));
  return c;
};


export default transformForHighcharts;
