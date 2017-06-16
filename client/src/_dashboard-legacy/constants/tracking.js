const CATEGORY = {
  CATEGORY_SEEK_MORE_INFO: 'seek more info',
	CATEGORY_DASHBOARD_INDEX:       'Dashboard',
	CATEGORY_DASHBOARD_SHOW:        'Dashboard Show',
	CATEGORY_CHART_WIDGET:          'Chart Widget',
	CATEGORY_UI_EVENT:              'UI Engagement'
};

const ACTION = {
  ACTION_CLICK: 'click',
  ACTION_TOGGLE: 'toggle',
	ACTION_TOGGLE_HIGH_CONTRAST_MODE:           'Toggle High Contrast Mode',
	ACTION_CLICK_HERO_WIDGET_LEGEND_INFO:       'Clicked Hero Widget legend info',
	ACTION_CLICK_DOWNLOAD_RAW_DATA:             'Clicked Download Raw Dashboard Data',
	ACTION_CLICK_WIDGET_DEFINITION_TOOLTIP:     'Clicked Widget Definition Tooltip',
	ACTION_UI_SCROLLED_TO_BOTTOM:               'Scrolled to bottom of page',
	ACTION_ENGAGED_WITH_CHART:                  'Engaged with Chart'
};

const LABEL = {
	LABEL_HERO_CHART:                           'Hero widget',
	LABEL_BELOW_THE_LINE_CHART:                 'Below the line chart'
};


const GA_EVENT_DEFINITIONS = {
	ENABLE_HIGH_CONTRAST: [
		CATEGORY.CATEGORY_DASHBOARD_SHOW,
		ACTION.ACTION_TOGGLE_HIGH_CONTRAST_MODE,
		'On'
	],
	DISABLE_HIGH_CONTRAST: [
		CATEGORY.CATEGORY_DASHBOARD_SHOW,
		ACTION.ACTION_TOGGLE_HIGH_CONTRAST_MODE,
		'Off'
	],
	SCROLLED_TO_BOTTOM: [
		CATEGORY.CATEGORY_UI_EVENT,
		ACTION.ACTION_UI_SCROLLED_TO_BOTTOM
	],
	ENGAGED_WITH_CHART: [
		CATEGORY.CATEGORY_UI_EVENT,
		ACTION.ACTION_ENGAGED_WITH_CHART
	]
};


module.exports = Object.assign({}, CATEGORY, ACTION, LABEL, GA_EVENT_DEFINITIONS);
