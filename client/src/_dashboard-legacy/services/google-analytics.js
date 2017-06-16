let ga = window.ga || (window.ga = {});
import { isArray } from 'lodash';


/**
 * Fire a Google Analytics Event
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 *
 * @param eventCategory {Array|String}
 * @param eventAction {String}
 * @param eventLabel {String}
 * @param eventValue {String}
 * @param fieldsObject {Object}
 */
export function handleGaEvent(eventCategory, eventAction, eventLabel, eventValue, fieldsObject) {
	if (isArray(eventCategory)) {
		ga('send', 'event', ...eventCategory);
		return;
	}
	if (!eventCategory || !eventAction) {
		throw new Error('Must pass category and action to handleEvent.');
	}
	ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue, fieldsObject);
	return;
}

export default {};
