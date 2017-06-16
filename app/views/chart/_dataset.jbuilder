json.(dataset, :units, :notes, :color)
json.id dataset.name.parameterize
json.name(dataset.label || dataset.name)
json.data do
  json.array! dataset.datapoints, partial: 'chart/datapoint', as: :datapoint
end
