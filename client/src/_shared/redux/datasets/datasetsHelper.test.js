
/*global describe,it,beforeEach*/
import expect from 'expect';

import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';
import {
  getHumanisedUnits,
  updateDatasetInDatasets
} from './datasetsHelper';


describe('(Helpers) Datasets - datasetsHelper', () => {

  const fixtureDatasets = fixtureState.datasets;
  const fixtureDataset = fixtureDatasets[0];

  if (typeof fixtureDatasets === 'undefined' || fixtureDatasets.length <= 0) throw new Error('invalid fixtureDatasets');
  if (typeof fixtureDataset === 'undefined') throw new Error('invalid fixtureDataset');


  describe('getHumanisedUnits', () => {
    it('should return \'\' when provided n, s, or i', () => {
      expect(getHumanisedUnits('n')).toEqual('');
      expect(getHumanisedUnits('s')).toEqual('');
      expect(getHumanisedUnits('i')).toEqual('');
    });
    it('should return itself when provided %, or $', () => {
      expect(getHumanisedUnits('%')).toEqual('%');
      expect(getHumanisedUnits('$')).toEqual('$');
    });
    it('should throw if an unrecognised value is provided', () => {
      expect(
        () => getHumanisedUnits('__*^Q#')
      ).toThrow();
      expect(
        () => getHumanisedUnits('sdsajdajhsgdjhas')
      ).toThrow();
    });
  });

  describe('updateDatasetInDatasets', () => {
    const newDatasetState = {...fixtureDataset, label: 'cats cats cats'};
    const actual = updateDatasetInDatasets(fixtureDatasets, newDatasetState);

    it('should update a dataset on state', () => {
      expect(actual).toContain(newDatasetState);
    });

    it('should not increase the size of state', () => {
      expect(actual.length).toEqual(fixtureDatasets.length);
    });

    it('should have updated the correct property on the correct dataset in state', () => {
      expect(actual.find(d => d.id == newDatasetState.id).label).toEqual(newDatasetState.label);
    });
  });

});
