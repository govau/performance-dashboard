import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Form from './slice_form';
import withPreview from './../preview/withPreview';
import {CAN_CREATE_SLICE} from './../../../config';
import {createSlice} from 'shared/redux/slices/slicesActions';
import {
  setLastWidgetImpression,
  setShowPreview
} from './../../../redux/ui/uiActions';
import {getHumanisedMonth} from 'shared/utils/formatDates';

const EnhancedForm = withPreview(Form);

const mapStateToProps = (state, ownProps) => {
  return {
    type: 'create',
    canSubmit: CAN_CREATE_SLICE
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (payload) => {
      return dispatch(createSlice(payload));
    },

    handleSubmitSuccess({widget, slice, datasets}) {
      dispatch(setLastWidgetImpression({
        widgetId: widget.id,
        description: `Published data for: ${getHumanisedMonth(slice.period_start)} - ${slice.groups.map(group => {
          const dataset = datasets.find(d => d.id == group.dataset_id);
          return ` ${dataset.label}: ${group.value === null ? "No data" : group.value}`
        })}`,
      }));
      dispatch(push(ownProps.completedUrl));
    },

    handleCancel: (widgetId) => {
      dispatch(setLastWidgetImpression({
        widgetId: widgetId
      }));
      dispatch(push(ownProps.completedUrl));
    },

    hidePreview: () => {
      dispatch(setShowPreview({condition: false}));
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm);
