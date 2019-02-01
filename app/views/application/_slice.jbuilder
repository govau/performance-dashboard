json.widget_id slice.widget.id

json.dashboard_id slice.widget.dashboard.id

json.period_start slice.period_start.strftime '%Y-%m-%dT%H:%H:%SZ'

json.period_end slice.period_end.strftime '%Y-%m-%dT%H:%H:%SZ'

json.period slice.period

# json.row_label slice.row_label

json.groups slice.groups do |dataset_id, aggregate_value|
  json.dataset_id dataset_id

  json.value aggregate_value
end
