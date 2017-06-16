import test from 'ava';
import _ from 'lodash';

import inputData from './../fixtures/data-dashboard-index-sparkline';
import { PATTERNS, PATTERNSDARK } from './../fixtures/patterns';

// const EXPECTED = [
//   [
//     {
//       "x": "2016-03-01T00:00:00.000Z",
//       "y": 99,
//       "id": "user-satisfaction",
//       "color": "#f2b038",
//       "altColor": "url(#vcjmv)",
//       "altColorDark": "url(#cgspq)",
//       "altLineStyle": "12, 5",
//       "name": "User satisfaction"
//     },
//     {
//       "x": "2016-04-01T00:00:00.000Z",
//       "y": 95,
//       "id": "user-satisfaction",
//       "color": "#f2b038",
//       "altColor": "url(#vcjmv)",
//       "altColorDark": "url(#cgspq)",
//       "altLineStyle": "12, 5",
//       "name": "User satisfaction"
//     },
//     {
//       "x": "2016-05-01T00:00:00.000Z",
//       "y": 90,
//       "id": "user-satisfaction",
//       "color": "#f2b038",
//       "altColor": "url(#vcjmv)",
//       "altColorDark": "url(#cgspq)",
//       "altLineStyle": "12, 5",
//       "name": "User satisfaction"
//     },
//     {
//       "x": "2016-06-01T00:00:00.000Z",
//       "y": 97,
//       "id": "user-satisfaction",
//       "color": "#f2b038",
//       "altColor": "url(#vcjmv)",
//       "altColorDark": "url(#cgspq)",
//       "altLineStyle": "12, 5",
//       "name": "User satisfaction"
//     }
//   ]
// ];


test.beforeEach(t => {
  require('./../helpers/setup-browser-env');

  window.patterns = PATTERNS;
  window.patternsDark = PATTERNSDARK;

  let convertData = require('./../../src/dashboard/legacy/Helpers/convertData');

  let data = convertData(inputData.datasets);
  let datum = data[0][0];

  t.context.data = {data, datum};
});


test('data is an array with length 1', t => {
  let data = t.context.data.data;
  t.true(_.isArray(data) && data.length === 1);
});

test('data should have same number of datums as data length', t => {
  let data = t.context.data.data;
  let inputDataLen = inputData.datasets[0].data.length;
  let outputDataLen = data[0].length;
  t.true(inputDataLen === outputDataLen);
});

test('has datum', t => {
  t.true(!!t.context.data.datum);
});

test('property "x" should exist and is correct type', t => {
  let x = t.context.data.datum.x;
  t.true(x && _.isDate(x));
});

test('property "y" should exist and is correct type', t => {
  let y = t.context.data.datum.y;
  t.true(y && _.isNumber(y));
});

test('property "id" should exist', t => {
  let id = t.context.data.datum.id;
  t.true(!!id);
});

test('property "color" should exist and is one of PATTERNS', t => {
  let color = t.context.data.datum.altColor;
  t.true(!!color && PATTERNS.includes(color));
});

test('property "color" should exist and is one of PATTERNSDARK', t => {
  let color = t.context.data.datum.altColorDark;
  t.true(!!color && PATTERNSDARK.includes(color));
});
