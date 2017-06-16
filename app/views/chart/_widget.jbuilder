json.definition widget.description
json.(widget, :id, :name, :type, :size, :units, :description, :updated_at,
  :last_updated_at, :data_updated_at, :prefix, :suffix, :name_slug, :summary,
  :units_to_s, :style, :pos)

%w(displayRoundedData stacking).each do |opt|
  if widget.options&.key? opt
    json.set! opt.to_sym, widget.options[opt]
  end
end

json.latest do
  if widget.latest_datapoint.present?
    json.partial! 'chart/datapoint', datapoint: widget.latest_datapoint
  end
end

json.datasets do
  json.array! widget.datasets, partial: 'chart/dataset', as: :dataset
end
