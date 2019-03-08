import React from 'react';
import PropTypes from 'prop-types';
import TextWidget from 'react-jsonschema-form/lib/components/widgets/TextWidget';

import CustomTextWidgetWithAddon from './customTextWidgetWithAddon';

const InputBasic = props => {
  return props.options && props.options.addonText ? (
    <CustomTextWidgetWithAddon {...props} />
  ) : (
    <TextWidget {...props} />
  );
};

InputBasic.propTypes = {
  options: PropTypes.shape({
    addonText: PropTypes.string,
  }),
};

export default InputBasic;
