
import {connect} from 'react-redux';

import {
  selectWidgetSlices,
  getDenormalizedSlice
} from 'shared/redux/slices/slicesSelectors';
import {setShowPreview} from './../../../redux/ui/uiActions';


import Preview from './preview_component';


// todo - Previews should work for Edit data as well as Create data
// todo - https://govausites.atlassian.net/browse/PD-1504


const getDenormalizedTempSlice = (tempSlice, {widget, dashboard, datasets}) => {
  return {
    widget: widget,
    dashboard: dashboard,
    period: 'month',
    period_start: new Date(tempSlice.period_start).toJSON(),
    period_end: new Date(tempSlice.period_end || '').toJSON(),
    groups: tempSlice.groups.map((g, idx) => {
      return {
        dataset: datasets[idx],
        value: g.value,
      }
    })
  }
};

const mapStateToProps = (state, ownProps) => {

  const {currentNormalizedSlice} = ownProps;

  if (!currentNormalizedSlice) {
    return {
      showPreview: false,
      slices: null,
    }
  }

  const {ui:{showPreview}} = state;

  if (showPreview === false) {
    return {
      showPreview: false,
      slices: null,
    }
  }


  // get data ready for charts

  const normalizedSavedSlices = selectWidgetSlices(state, {
    widgetId: currentNormalizedSlice.widget_id,
    dashboardId: currentNormalizedSlice.dashboard_id,
  });

  const denormalizedSavedSlices = normalizedSavedSlices.map(s => {
    return getDenormalizedSlice(state, {
      widgetId: s.widget_id,
      dashboardId: s.dashboard_id,
      periodStart: s.period_start,
    })
  });

  const denormalizedTempSlice = getDenormalizedTempSlice(currentNormalizedSlice, {
    widget: denormalizedSavedSlices[0].widget,
    dashboard: denormalizedSavedSlices[0].dashboard,
    datasets: denormalizedSavedSlices[0].groups.map(g => g.dataset),
  });

  // todo - this only works for create data
  const mergedDenormalizedSlices = [...denormalizedSavedSlices, denormalizedTempSlice];

  return {
    showPreview: true,
    slices: mergedDenormalizedSlices,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleShowPreview: (condition) => {
      dispatch(setShowPreview({condition: true}));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
