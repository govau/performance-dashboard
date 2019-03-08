// Action Types

export const types = {
  UI_SET_LASTWIDGETIMPRESSION: '/ui/setLastWidgetImpression',
  UI_SET_SHOWPREVIEW: '/ui/setShowPreview',
};

// Actions

/**
 * .@param {Object} payload
 * @returns {Object} action creator
 */
export const setLastWidgetImpression = ({
  widgetId = null,
  type = null,
  description = null,
}) => {
  if (type !== null) {
    const allowedTypes = ['success', 'danger', 'info', 'warning'];
    if (allowedTypes.includes(type) !== true) {
      throw new Error(
        `Must provide one of allowed types: "${allowedTypes.join(
          ', ',
        )}", you provided: ${type}`,
      );
    }
  } else {
    if (description !== null) {
      type = 'success';
    }
  }
  return {
    type: types.UI_SET_LASTWIDGETIMPRESSION,
    payload: { widgetId, description, type },
  };
};

export const setShowPreview = ({ condition = false }) => {
  if (
    typeof condition !== 'undefined' &&
    condition !== true &&
    condition !== false
  ) {
    throw new Error(
      'Condition provided to setShowPreview must be Undefined or a Boolean',
    );
  }
  return {
    type: types.UI_SET_SHOWPREVIEW,
    payload: { condition },
  };
};
