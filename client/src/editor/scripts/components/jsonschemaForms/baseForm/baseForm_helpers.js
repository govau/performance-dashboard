import React from 'react';
import Summary from 'shared/components/uikit-form-validation-summary';

export const renderGlobalErrors = errors => {
  if (errors && errors.length) {
    return (
      <Summary
        headingText="There was an error when submitting"
        errors={errors}
      />
    );
  }
  return null;
};
