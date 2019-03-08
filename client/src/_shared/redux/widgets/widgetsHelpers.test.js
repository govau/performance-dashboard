/*global describe,it*/
import expect from 'expect';

import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';
import { isWidget, updateWidgetInWidgets } from './widgetsHelpers';

describe('(Helpers) Widgets - widgetsHelpers', () => {
  const fixtureWidgets = fixtureState.widgets;
  const fixtureWidget = fixtureWidgets[0];
  const fixtureDashboard = fixtureState.dashboards[0];

  if (typeof fixtureWidgets === 'undefined' || fixtureWidgets.length <= 0)
    throw new Error('invalid fixtureWidgets');
  if (typeof fixtureWidget === 'undefined')
    throw new Error('invalid fixtureWidget');
  if (typeof fixtureDashboard === 'undefined')
    throw new Error('invalid fixtureDashboard');

  describe('isWidget', () => {
    it('should correctly verify type is Widget', () => {
      expect(isWidget(fixtureWidget)).toEqual(true);
    });
    it('should correctly verify type is not Widget', () => {
      expect(isWidget(fixtureDashboard)).toEqual(false);
      expect(isWidget({})).toEqual(false);
    });
  });

  describe('updateWidgetInWidgets', () => {
    const newWidgetState = { ...fixtureWidget, description: 'cats cats cats' };
    const actual = updateWidgetInWidgets(fixtureWidgets, newWidgetState);

    it('should update a widget on state', () => {
      expect(actual).toContain(newWidgetState);
    });

    it('should not increase the size of state', () => {
      expect(actual.length).toEqual(fixtureWidgets.length);
    });

    it('should have updated the correct property on the correct widget in state', () => {
      expect(actual.find(w => w.id == newWidgetState.id).description).toEqual(
        newWidgetState.description,
      );
    });
  });
});
