
/**
 * Because state belongs to form instead of global, ie Redux,
 * we must extend the functionality of the form locally.
 * For Previews to exist, they need to belong to form.
 */


import React, {PureComponent} from 'react';
import Preview from './preview_container';

const withPreview = ComposedForm => {

  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
      this.triggerUpdate = this.triggerUpdate.bind(this);

      this.liveFormData = this.makeFormDataFromProps(props);

      this.state = {
        previewData: this.normalizeForPreview(),
      }
    }

    // todo - this is duped from slice_form
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

    onChange(formState) {
      // set it on instance, not on state so it trigger rerender
      this.liveFormData = formState.formData;
      // if this clobbered an onChange, run that too now
      this.props.onChange && this.props.onChange(formState);
    }

    normalizeForPreview() {
      const data = this.liveFormData;

      if (data === null) {
        return null;
      }

      if (!data) {
        throw new Error('liveFormData must exist on baseform');
      }

      const {formModel} = this.props;
      const keys = Object.keys(data.groups);
      const normalized = {
        dashboard_id: formModel.dashboard.id,
        widget_id: formModel.widget.id,
        period: formModel.period,
        period_start: formModel.period_start,
        groups: keys.map((key, idx) => {
          return {
            dataset_id: key,
            value: Number(data.groups[key]),
          }
        })
      };
      return normalized;
    }

    triggerUpdate() {
      this.setState({'previewData': this.normalizeForPreview()})
    }

    render() {
      return (
        <div>
          <ComposedForm {...this.props} onChange={this.onChange} />
          
          <Preview 
            triggerUpdatePreview={this.triggerUpdate} 
            currentNormalizedSlice={this.state.previewData} 
          />
        </div>
      )
    }
  }
};

export default withPreview;
