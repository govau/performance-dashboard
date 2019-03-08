/**
 * Widget meta data
 *
 * @access
 * metadata[widget.type][widget.units]
 *
 */
const metadata = {
  full: {
    n: {
      label: 'Key performance indicators',
      widget_help:
        'The 4 key performance indicators are required by the Digital Service Standard. They appear at the top of your service dashboard. Enter your data in the fields below.',
      widget_form_help: '',
      validators: [],
    },
  },
  bar: {
    n: {
      label: '',
      widget_help:
        'This is represented as a bar chart. Enter your data in the fields below.',
      widget_form_help: `These figures are numerical. You can include up to 2 decimal places. Leave a field blank if you have no data.`,
      validators: [],
    },
    s: {
      label: '',
      widget_help:
        'This is represented as a bar chart. Enter your data in the fields below.',
      widget_form_help: `Enter figures in seconds. For example, 5 hours 2 minutes 35 seconds = 18155 seconds. It will show on your chart in hours, minutes and seconds.`,
      validators: [],
    },
    '%': {
      label: '',
      widget_help: '',
      widget_form_help: `These figures are percentages and have to add up to 100. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
    $: {
      label: '',
      widget_help: '',
      widget_form_help: `This figure is in dollars. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
  },
  fact: {
    n: {
      label: '',
      widget_help: `This is information you'd like to tell users about your service, including the outcomes you'd like to achieve. Enter text in the field below.`,
      widget_form_help: '',
      validators: [],
    },
  },
  line: {
    n: {
      label: '',
      widget_help: `This is represented as a line chart. Enter your data in the fields below.`,
      widget_form_help: `These figures are numerical. You can include up to 2 decimal places. Leave a field blank if you have no data.`,
      validators: [],
    },
    s: {
      label: '',
      widget_help: `This is represented as a line chart. Enter your data in the fields below.`,
      widget_form_help: `Enter figures in seconds. For example, 5 hours 2 minutes 35 seconds = 18155 seconds. It will show on your chart in hours, minutes and seconds.`,
      validators: [],
    },
    '%': {
      label: '',
      widget_help: `This is represented as a line chart. Enter your data in the fields below.`,
      widget_form_help: `These figures are percentages and have to add up to 100. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
  },
  sparkline: {
    '%': {
      label: '',
      widget_help: `This is represented as a sparkline chart. Enter your data in the field below.`,
      widget_form_help: `This figure is a percentage and can't be more than 100. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
    n: {
      label: '',
      widget_help: `This is represented as a sparkline chart. Enter your data in the field below.`,
      widget_form_help: `These figures are numerical. You can include up to 2 decimal places. Leave a field blank if you have no data.`,
      validators: [],
    },
  },
  'kpi-sparkline': {
    '%': {
      label: '',
      widget_help: `This is represented as a sparkline chart. Enter your data in the field below.`,
      widget_form_help: `This figure is a percentage and can't be more than 100. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
    $: {
      label: '',
      widget_help: `This is represented as a sparkline chart. Enter your data in the field below.`,
      widget_form_help: `This figure is in dollars. You can include up to 2 decimal places — for example, 32.25.`,
      validators: [],
    },
  },
  pie: {
    '%': {
      label: '',
      widget_help: `This is represented as a pie chart. Enter your data in the fields below.`,
      widget_form_help:
        'These figures are percentages and have to add up to 100. You can include up to 2 decimal places — for example, 32.25.',
      validators: [],
    },
  },
};

export default metadata;
