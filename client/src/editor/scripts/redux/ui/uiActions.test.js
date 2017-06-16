/*global describe,it*/

import expect from 'expect';

import {setLastWidgetImpression} from './uiActions';


describe('(Actions) UI - uiActions', () => {

  describe('setLastWidgetImpression', () => {
    it('should set the correct properties from a payload with only widgetId provided', () => {
      const props = {widgetId:1};
      expect(setLastWidgetImpression(props).payload).toEqual({
        widgetId: props.widgetId,
        type: null,
        description: null
      });
    });

    it('should set the correct properties from a payload with widgetId, description provided', () => {
      const props = {widgetId: 1, description: 'lorem ipsum'};
      expect(setLastWidgetImpression(props).payload).toEqual({
        widgetId: props.widgetId,
        type: 'success',
        description: props.description
      });
    });

    it('should set the correct properties from a payload with widgetId, description, type provided', () => {
      const props = {widgetId: 1, type: 'success', description: 'lorem ipsum'};
      expect(setLastWidgetImpression(props).payload).toEqual(props);
    });

    it('should clear all properties if no empty object is provided', () => {
      const props = {};
      expect(setLastWidgetImpression(props).payload).toEqual({
        widgetId: null,
        type: null,
        description: null
      });
    });

    it('should fail if not properties are provided as payload', () => {
      expect(setLastWidgetImpression).toThrow();
    });
  });

});
