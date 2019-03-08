/*global describe,it,beforeEach,beforeAll*/
import expect from 'expect';

import initialState from './initialState';
import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';
import reducer from './rootReducer';
import { types as sliceTypes } from 'shared/redux/slices/slicesActions';
import { formatDateStartOfPeriod } from 'shared/redux/slices/slicesSelectors';

describe('(Reducers) Root - rootReducer', () => {
  const fixtureWidget = fixtureState.widgets[0];
  const fixtureSlice = fixtureState.slices[0];
  const fixtureDatasets = fixtureState.datasets;
  const fixtureDataset = fixtureDatasets[10];

  if (typeof fixtureWidget === 'undefined')
    throw new Error('invalid fixtureWidget');
  if (typeof fixtureSlice === 'undefined')
    throw new Error('invalid fixtureSlice');
  if (typeof fixtureDatasets === 'undefined' || fixtureDatasets.length <= 0)
    throw new Error('invalid fixtureDatasets');
  if (typeof fixtureDataset === 'undefined')
    throw new Error('invalid fixtureDataset');

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should see no state change if action is invalid', () => {
    const output = reducer(initialState, {
      type: 'PAT THE KITTEH',
      payload: {},
    });
    expect(output).toEqual(initialState);
  });

  describe('Cross cutting on Slice', () => {
    describe('HYDRATE__SLICE_UPDATED', () => {
      let payload = null;
      let actual = null;
      let actualWidget = null;
      let actualSlice = null;
      let actualDataset = null;

      beforeAll(() => {
        payload = {
          widget: { ...fixtureWidget, ...{ description: 'cats' } },
          slice: {
            ...fixtureSlice,
            ...{
              widget_id: fixtureWidget.id,
              groups: [{ dataset_id: fixtureDataset.id, value: '123' }],
            },
          },
          datasets: [{ ...fixtureDataset, ...{ value: '123' } }],
        };
        actual = reducer(
          { ...initialState, ...fixtureState },
          { type: sliceTypes.HYDRATE__SLICE_UPDATED, payload },
        );
        actualWidget = actual.widgets.find(w => w.id == fixtureWidget.id);
        actualSlice = actual.slices.find(s => {
          return (
            s.widget_id == fixtureWidget.id &&
            s.period === fixtureSlice.period &&
            s.period_start === fixtureSlice.period_start
          );
        });
        actualDataset = actual.datasets.find(d => d.id == fixtureDataset.id);
      });

      it('should update a Slice when provided correct response', () => {
        expect(actualWidget.description).toEqual('cats');
        expect(actualSlice.groups[0].value).toEqual('123');
        expect(actualDataset.value).toEqual('123');
      });

      it('should not change state slice length', () => {
        expect(actual.slices.length).toEqual(
          { ...initialState, ...fixtureState }.slices.length,
        );
      });
    });

    describe('HYDRATE__SLICE_CREATED', () => {
      let payload = null;
      let actual = null;
      let actualWidget = null;
      let actualSlice = null;

      beforeAll(() => {
        payload = {
          widget: {
            ...fixtureWidget,
            ...{ description: 'cats', datasets: [fixtureDataset.id] },
          },
          slice: {
            dashboard_id: fixtureWidget.dashboard_id,
            widget_id: fixtureWidget.id,
            period: 'month',
            period_start: formatDateStartOfPeriod(new Date()),
            groups: [{ dataset_id: fixtureDataset.id, value: '123' }],
          },
          datasets: [{ ...fixtureDataset }],
        };
        actual = reducer(
          { ...initialState, ...fixtureState },
          { type: sliceTypes.HYDRATE__SLICE_CREATED, payload },
        );
        actualWidget = actual.widgets.find(w => w.id == fixtureWidget.id);
        actualSlice = actual.slices.find(s => {
          return (
            s.widget_id == payload.widget.id &&
            s.period === payload.slice.period &&
            s.period_start === formatDateStartOfPeriod(new Date())
          );
        });
      });

      it('should create a Slice when provided correct response', () => {
        expect(actualWidget.description).toEqual('cats');
        expect(actualSlice.groups[0].value).toEqual('123');
      });

      it('should increase the size of slices', () => {
        expect(actual.slices.length).toEqual(
          { ...initialState, ...fixtureState }.slices.length + 1,
        );
      });
    });
  });
});
