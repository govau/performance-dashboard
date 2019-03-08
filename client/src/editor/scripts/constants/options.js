import React from 'react';

export const months = [
  { value: '', label: 'Select' },
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

export const charts = [
  { value: '', label: 'Select' },
  { value: 'bar', label: 'Bar' },
  { value: 'line', label: 'Line' },
  { value: 'sparkline', label: 'Sparkline' },
  { value: 'pie', label: 'Pie' },
];

export const units = [
  { value: '', label: 'Select' },
  { value: 'n', label: 'Number' },
  { value: '%', label: 'Percentage' },
  { value: '$', label: 'Dollars' },
];

export const intervals = [
  { value: '', label: 'Select' },
  { value: 'month', label: 'Month' },
  { value: 'custom', label: 'Custom' },
];

export const getOptions = list =>
  list.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));
