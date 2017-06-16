
import PropTypes from 'prop-types';

import BaseForm from './../baseForm';
import {MESSAGE_ERROR_NUMERIC, MESSAGE_ERROR_PERCENTILE} from './../../../constants/messages';
import {getHumanisedUnits} from 'shared/redux/datasets/datasetsHelper';


class SliceForm extends BaseForm {

  constructor(props) {
    super(props);
    // store formData not on state so we dont trigger re-rendering onChange
    this.formData = this.makeFormDataFromProps(props);
  }

  onChange(formState) {
    this.formData = formState.formData;
    super.onChange(formState);
  }

  onBeforeSubmit() {
    this.props.hidePreview();
    super.onBeforeSubmit();
  }

  onSubmit(formState) {
    const self = this;
    const {formData} = formState;

    const payload = this.normalizePayload(formData);

    self.onBeforeSubmit();

    return this.props.handleSubmit(payload)
      .then(response => {
        self.onSubmitSuccess();
        return response;
      })
      .then(response => {
        self.props.handleSubmitSuccess(response);
        return response;
      })
      .catch(error => {
        self.onSubmitError(error.message || 'Submission failed');
        return error;
      });
  }

  onCancel() { // todo - refactor
    this.props.hidePreview();
    this.props.handleCancel(this.props.formModel.widget.id);
    return; // must return so the form doesn't try to submit - library bug
  }

  validate(formData, errors) {

    super.validate(formData, errors);

    const self = this;
    const keys = Object.keys(formData.groups);

    keys.forEach((field, idx) => {
      const key = keys[idx];
      const value = formData.groups[key];
      const type = self.props.formModel.groups[idx].dataset.units;

      // nulls are valid
      if (typeof value === 'undefined') {
        return;
      }

      // validate string value coerced to number
      if (isNaN(Number(value))) {
        errors.groups[key].addError(MESSAGE_ERROR_NUMERIC);
      } else {
        // validate percentage
        if (type === '%') {
          if (Number(value) < 0 || Number(value) > 100) {
            errors.groups[key].addError(MESSAGE_ERROR_PERCENTILE);
          }
        }
      }
    });

    return errors;
  }

  normalizePayload(formData) {
    const {formModel} = this.props;
    const keys = Object.keys(formData.groups);
    return {
      widget_id: formModel.widget.id,
      period: formModel.period,
      period_start: formModel.period_start,
      formData: {
        groups: keys.map((key, idx) => {
          return {
            dataset_id: key,
            value: formData.groups[key]
          }
        })
      }
    }
  }

  makeFormProps() {
    const {canSubmit, formModel} = this.props;

    let schema = {
      "type": "object",
      "properties": {
        "groups": {
          "type": "object",
          "title": '',  // explicitly don't render a title
          "properties": {},
        },
      }
    };
    let uiSchema = {
      "groups": {}
    };

    formModel.groups.forEach(group => {
      const key = group.dataset.id;

      schema.properties.groups.properties[key] = {
        type: 'string', // must be string because of null option in API :(
        title: group.dataset.label,
      };

      uiSchema.groups[key] = {
        "ui:widget": "customText",
        "ui:options": {
          addonText: getHumanisedUnits(group.dataset.units)
        },
        "ui:disabled": canSubmit === false
      };
    });

    return {
      formModel,
      canSubmit,
      schema,
      uiSchema
    }
  }

  // todo - there's a dupe of this in withPreview
  makeFormDataFromProps(props) {
    let formData = {
      groups: {}
    };
    props.formModel.groups.forEach(group => {
      const key = group.dataset.id;
      formData.groups[key] = group.value === null || typeof group.value === 'undefined' ? '' : String(group.value);
    });
    return formData;
  }

  render() {
    const formProps = this.makeFormProps();
    const formData = this.formData;
    return super.render({formProps, formData});
  }

}

if (__DEV__) {
  SliceForm.propTypes = {
    canSubmit: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleSubmitSuccess: PropTypes.func,
    formModel: PropTypes.object.isRequired,
    completedUrl: PropTypes.string,
    handleCancel: PropTypes.func
  };
}

export default SliceForm;

