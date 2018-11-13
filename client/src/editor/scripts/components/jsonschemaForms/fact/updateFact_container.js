import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Form from './fact_form';
import {updateWidget} from 'shared/redux/widgets/widgetsActions';
import {CAN_UPDATE_FACT} from './../../../config';
import {setLastWidgetImpression} from './../../../redux/ui/uiActions';

const mapStateToProps = (state, ownProps) => {
  return {
    canSubmit: CAN_UPDATE_FACT
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (payload) => {
      return dispatch(updateWidget(payload));
    },
    handleSaveSuccess: (widgetId) => {
      dispatch(setLastWidgetImpression({
        widgetId: widgetId,
        description: `Fact has been successfully edited`
      }));
      dispatch(push(ownProps.completedUrl));
    },
    handleCancel: (widgetId) => {
      dispatch(setLastWidgetImpression({
        widgetId: widgetId,
      }));
      dispatch(push(ownProps.completedUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
