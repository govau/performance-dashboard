json.dashboards [dashboard], partial: 'dashboard', as: :dashboard

json.widgets dashboard.widgets, partial: 'widget', as: :widget

json.datasets dashboard.datasets.uniq, partial: 'dataset', as: :dataset

json.slices @slices, partial: 'slice', as: :slice
