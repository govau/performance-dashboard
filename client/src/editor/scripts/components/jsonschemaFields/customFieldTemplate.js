import React from 'react';
import PropTypes from 'prop-types';

const Field = props => {
  const {
    id,
    classNames,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
  } = props;
  if (hidden) {
    return children;
  }

  const hasError = Boolean(errors.props.errors && errors.props.errors.length);

  let _classNames = 'UIK-form-group form-group';

  if (classNames) {
    _classNames = `${_classNames} ${classNames}`;
  }
  if (hasError) {
    _classNames = `${_classNames} has-danger`;
  }

  return (
    <div className={_classNames}>
      {displayLabel ? (
        <label htmlFor={id}>
          {label}
          {required ? '*' : null}
        </label>
      ) : null}
      {displayLabel && description ? description : null}
      {hasError && (
        <div className="UIK-field-validation form-control-feedback">
          {errors}
        </div>
      )}
      {children}
      {help && <small className="form-text text-muted">{help}</small>}
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.string,
  classNames: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  errors: PropTypes.element,
  rawErrors: PropTypes.arrayOf(PropTypes.string),
  help: PropTypes.element,
  rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.element,
  rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  displayLabel: PropTypes.bool,
  fields: PropTypes.object,
  formContext: PropTypes.object,
};

export default Field;
