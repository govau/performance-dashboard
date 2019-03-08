/* global describe, it, beforeAll */
import expect from 'expect';
import buildMockApiEnvironment, {
  mockFetch,
  mockFetchError,
} from './../../../test/utils/buildMockApiEnvironment';

import { updateWidget } from './widgetsActions';

describe('(Actions) Slices - slicesActions', () => {
  let store;
  beforeAll(() => {
    store = buildMockApiEnvironment();
  });

  describe('updateWidget', () => {
    it('on success (201) should return a Promise', () => {
      const fixturePayload = {
        widget: { id: 1, dashboard_id: 1 },
      };
      const fixtureReponse = { cat: 'magoo' };
      mockFetch('dashboards/1/widgets/1', 201, fixtureReponse);
      const request = store.dispatch(updateWidget(fixturePayload));
      expect(request).toBeA(Promise);
      return request.then(data => {
        return expect(data).toContain(data);
      });
    });
  });
});
