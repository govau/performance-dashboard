import test from 'ava';
import _ from 'lodash';
import { PATTERNS, PATTERNSDARK } from './../fixtures/patterns';

import inputData from './../fixtures/data-dashboard-show-pie';

// const EXPECTED = [
//   {
//     "x": "chrome",
//     "y": 41.093527338183456,
//     "color": "#4892c0",
//     "altColor": "url(#vqgkx)",
//     "id": "chrome",
//     "name": "Chrome"
//   }, {
//     "x": "safari",
//     "y": 26.723168079201976,
//     "color": "#75a370",
//     "altColor": "url(#rfapq)",
//     "id": "safari",
//     "name": "Safari"
//   }, {
//     "x": "mozilla",
//     "y": 27.85569639240981,
//     "color": "#f2b038",
//     "altColor": "url(#hqvos)",
//     "id": "mozilla",
//     "name": "Mozilla"
//   }, {
//     "x": "ie",
//     "y": 3.0975774394359856,
//     "color": "#47bcac",
//     "altColor": "url(#dhshr)",
//     "id": "ie",
//     "name": "IE"
//   }, {
//     "x": "other",
//     "y": 1.230030750768769,
//     "color": "#7066a5",
//     "altColor": "url(#enlga)",
//     "id": "other",
//     "name": "Other"
//   }
// ];

test.beforeEach(t => {
  require('./../helpers/setup-browser-env');

  window.patterns = PATTERNS;
  window.patternsDark = PATTERNSDARK;

  let convertDataForPie = require('./../../src/_dashboard-legacy/Helpers/convertDataForPie');

  let data = convertDataForPie(inputData.datasets);

  t.context.data = { data };
});

test('all y should add to 100', t => {
  let sum = 0;
  t.context.data.data.forEach(d => {
    sum += d.y;
  });
  t.true(Math.round(sum) === 100);
});
