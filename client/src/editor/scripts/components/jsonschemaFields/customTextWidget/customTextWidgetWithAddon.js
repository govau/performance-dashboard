
import React from 'react';
import PropTypes from 'prop-types';


/**
 * A custom TextWidget cloned and extended from the our form lib
 * src/components/widgets/TextWidget.js. Can render Bootstrap's addon labels
 * https://v4-alpha.getbootstrap.com/components/input-group/#basic-example
 * @param props
 * @returns {Object<jsx>}
 */
const InputBasicAddon = props => {
  const {options, value, required, onChange, inputProps} = props;
  const {addonText} = options;
  return (
    <div className="input-group">
      <input type="text" className="form-control"
             {...inputProps}
             disabled={options.disabled}
             value={typeof value === "undefined" ? "" : value}
             required={required}
             onChange={(event) => onChange(event.target.value)} />
      <span className="input-group-addon">{addonText}</span>
    </div>
  )
};

// todo - deprecate this
InputBasicAddon.defaultProps = {
  options: {
    disabled: false,
  },
  inputProps: {}
};

if (__DEV__) {
  InputBasicAddon.propTypes = {
    options: PropTypes.shape({
      addonText: PropTypes.string.isRequired,
    }),
    inputProps: PropTypes.object
  };
}

export default InputBasicAddon;
