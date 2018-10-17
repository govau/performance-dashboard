json.currentUser do
  json.(current_user, :id, :email)  # todo - first name, last name
  json.token current_user.session_token.token
end

json.dashboards current_user.dashboards, partial: 'dashboard', as: :dashboard
json.widgets current_user.widgets.decorate, partial: 'widget', as: :widget
json.datasets current_user.datasets.uniq, partial: 'dataset', as: :dataset
json.slices @slices, partial: 'slice', as: :slice
json.organisations @organisations, partial: 'organisation', as: :organisation
