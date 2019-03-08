/* global describe, it */
import expect from 'expect';
import { isArray } from 'lodash';

import {
  selectDataset,
  selectDatasets,
  selectDatasetsByWidget,
} from './datasetsSelectors';
import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';

describe('(Selectors) - Datasets - datasetsSelectors', () => {
  const fixtureDataset = fixtureState.datasets[53];
  if (typeof fixtureDataset === 'undefined')
    throw new Error('invalid fixtureDataset');
  const fixtureWidget = fixtureState.widgets[0];
  if (typeof fixtureWidget === 'undefined')
    throw new Error('invalid fixtureWidget');

  describe('selectDataset', () => {
    it('should return a Dataset with the same id as was provided', () => {
      expect(
        selectDataset(fixtureState, { datasetId: fixtureDataset.id }),
      ).toEqual(fixtureDataset);
    });
  });

  describe('selectDatasets', () => {
    it.skip('', () => {});
  });

  describe('selectDatasetsByWidget', () => {
    it('should return array of Datasets', () => {
      const outcome = selectDatasetsByWidget(fixtureState, {
        widgetId: fixtureWidget.id,
      });
      expect(isArray(outcome)).toBe(true);
    });
    it('should return an array of same length as widget.datasets', () => {
      const outcome = selectDatasetsByWidget(fixtureState, {
        widgetId: fixtureWidget.id,
      });
      expect(outcome.length).toEqual(fixtureWidget.datasets.length);
    });
  });

  // describe('(Selectors)', () => {
  //   describe('getDatasetById', () => {
  //     const state = [{id:1},{id:2}];
  //     it('should return the correct dataset when supplied id as Number', () => {
  //       const record = getDatasetById(state, 1);
  //       expect(record).toBeTruthy();
  //       expect(record.id).toEqual(1);
  //     });
  //     it('should return the correct dataset when supplied id as String', () => {
  //       const record = getDatasetById(state, '1');
  //       expect(record).toBeTruthy();
  //       expect(record.id).toEqual(1);
  //     });
  //     it('should return undefined if no dataset is found', () => {
  //       const record = getDatasetById(state, 100);
  //       expect(record).toEqual(void 0);
  //     });
  //     it('should throw if state provided is not correct type', () => {
  //       expect(() => {
  //         getDatasetById({}, 1);
  //       }).toThrow();
  //     });
  //   });
  //
  //   describe('getDatasetsByIds', () => {
  //     const state = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
  //     it('should return an array of datasets when a single id is supplied', () => {
  //       const output = getDatasetsByIds(state,[2]);
  //       expect(output.length).toBe(1);
  //       expect(output[0].id).toBe(2);
  //     });
  //     it('should return an array of datasets when a multiple ids are supplied', () => {
  //       const output = getDatasetsByIds(state,[2,4,5]);
  //       expect(output.length).toBe(3);
  //       expect(output[0].id).toBe(2);
  //       expect(output[1].id).toBe(4);
  //       expect(output[2].id).toBe(5);
  //     });
  //     it('should throw if state provided is not correct type', () => {
  //       expect(() => {
  //         getDatasetsByIds({}, [1]);
  //       }).toThrow();
  //     });
  //     it('should throw if ids provided are not correct type', () => {
  //       expect(() => {
  //         getDatasetsByIds({}, 1);
  //       }).toThrow();
  //     });
  //   });
  // });
});
