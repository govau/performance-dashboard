import PropTypes from 'prop-types';
import BaseForm from './../baseForm';

class FactForm extends BaseForm {
  constructor(props) {
    super(props);

    this.formData = this.makeFormDataFromProps(props);
  }

  onChange(formState) {
    this.formData = formState.formData;
    super.onChange(formState);
  }

  onSubmit(formState) {
    const self = this;
    const { formData } = formState;
    const payload = this.normalizePayload(formData);

    self.onBeforeSubmit();

    return this.props
      .handleSubmit(payload)
      .then(response => {
        self.onSubmitSuccess();
        return response;
      })
      .then(response => {
        self.props.handleSaveSuccess(self.props.formModel.widget.id);
        return response;
      })
      .catch(error => {
        self.onSubmitError(error.message || 'Submission failed');
        return error;
      });
  }

  onCancel() {
    // todo - refactor
    this.props.handleCancel(this.props.formModel.widget.id);
    return; // must return so the form doesn't try to submit - library bug
  }

  makeFormDataFromProps(props) {
    const { formModel } = props;

    return {
      description: formModel.widget.description
    };
  }

  makeFormProps() {
    const { canSubmit, formModel } = this.props;

    let schema = {
      type: 'object',
      properties: {
        description: {
          type: 'string',
          title: 'Description'
        }
      },
      required: ['description']
    };
    let uiSchema = {
      description: {
        'ui:widget': 'textarea',
        'ui:autofocus': true,
        'ui:options': {
          rows: 15
        },
        'ui:disabled': canSubmit === false
      }
    };

    return {
      formModel,
      canSubmit,
      schema,
      uiSchema
    };
  }

  normalizePayload(formData) {
    const { formModel } = this.props;

    return {
      dashboard_id: formModel.dashboard.id,
      widget_id: formModel.widget.id,
      formData: {
        description: formData.description
      }
    };
  }

  render() {
    const formProps = this.makeFormProps();
    const formData = this.formData;
    return super.render({ formProps, formData });
  }
}

FactForm.propTypes = {
  canSubmit: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  formModel: PropTypes.object.isRequired,
  completedUrl: PropTypes.string,
  handleCancel: PropTypes.func,
  handleSaveSuccess: PropTypes.func
};

export default FactForm;
