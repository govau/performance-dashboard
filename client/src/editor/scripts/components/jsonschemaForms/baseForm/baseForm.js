import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SchemaForm from 'react-jsonschema-form';
import isArray from 'lodash/isArray';
import CustomFieldTemplate from './../../jsonschemaFields/customFieldTemplate'
import InputBasicWidget from './../../jsonschemaFields/customTextWidget';
import * as helpers from './baseForm_helpers';

const widgets = {
  customText: InputBasicWidget
};

/**
 * A base form for react-jsonschema-form to handle any hacks or overrides for
 * all form instances in one place.
 */

class BaseForm extends PureComponent {

  constructor(props) {
    super(props);

    // console.log('BaseForm constructor');

    if (this.onChange) {
      this.onChange = this.onChange.bind(this);
    }
    if (this.onSubmit) {
      this.onSubmit = this.onSubmit.bind(this);
    }
    if (this.onCancel) {
      this.onCancel = this.onCancel.bind(this);
    }
    if (this.onError) {
      this.onError = this.onError.bind(this);
    }
    if (this.validate) {
      this.validate = this.validate.bind(this);
    }

    this.state = {
      globalErrors: [],
      // a promise is pending
      pending: false
    };
  }

  onChange(formState) {
    // console.log('called onChange', formState);
    this.props.onChange && this.props.onChange(formState);
  }

  onCancel(context, e) {
    e.preventDefault();
    this.props.onCancel && this.props.onCancel(context, e);
  }

  /** *Submitted* form data is invalid */
  onError(errors) {
    console.log('called onError', errors);
    this.props.onError && this.props.onError(errors);
  }

  onSubmit(formState) {
    throw new Error('Must handle onSubmit and override this.');
  }

  onBeforeSubmit() {
    const {globalErrors} = this.state;
    if (globalErrors && globalErrors.length) {
      this.setState({globalErrors: []});
    }
    this.setState({pending: true});
  }

  onSubmitSuccess() {
    // console.log('called onSubmitSuccess');
    this.setState({pending: false});
  }

  onSubmitError(errors) {
    // console.log('called onSubmitError');
    if (isArray(errors) === false) {
      errors = [errors];
    }
    this.setState({
      pending: false,
      globalErrors: errors
    });
  }

  validate(formData, errors) {
    // console.log('called validate', formData, errors);
    return errors;  // must return errors
  }

  renderGlobalErrors() {
    const {globalErrors} = this.state;
    return helpers.renderGlobalErrors(globalErrors);
  }

  render({formProps, formData}) {

    if (!formProps) {
      throw new Error('must provide formProps to base form');
    }

    const {
      schema,
      uiSchema,
      canSubmit = true,
      children,
    } = this.props;

    const {pending} = this.state;

    return (
      <div>
        <div className="mb-1">
          {this.renderGlobalErrors()}
        </div>
        <SchemaForm ref={(el => this.form = el)}
                    noHtml5Validate={true}
                    autocomplete="off"
                    showErrorList={false}
                    FieldTemplate={CustomFieldTemplate}
                    widgets={widgets}
                    formData={formData}
                    schema={schema}
                    uiSchema={uiSchema}
                    canSubmit={canSubmit}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onError={this.onError}
                    validate={this.validate} {...formProps}>

          {children ? children : null}

          <div>
            <button type="submit" className="UIK-button btn btn-primary" disabled={canSubmit === false || pending}>{pending ? `Saving...` : `Save`}</button>
            <button className='UIK-button btn btn-link' onClick={this.onCancel}>Cancel</button>
          </div>
        </SchemaForm>
      </div>
    )
  }
}

if (__DEV__) {
  BaseForm.propTypes = {
    formData: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object.isRequired,
    canSubmit: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onError: PropTypes.func,
    onChange: PropTypes.func,
    validate: PropTypes.func,
    children: PropTypes.node
  };
}


export default BaseForm;
