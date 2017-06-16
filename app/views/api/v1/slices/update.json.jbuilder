json.widget do 
  json.partial! '/widget', widget: @slice.widget
end

json.slice do 
  json.partial! '/slice', slice: @slice
end

json.datasets @slice.widget.data_table.datasets do |dataset|
  json.partial! '/dataset', dataset: dataset
end
