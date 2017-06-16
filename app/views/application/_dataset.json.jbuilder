json.(dataset,
  :id,
  :name,
  :label,
  :units,
  :notes,
  :created_at)

if dataset.color_string.present? 
  json.color dataset.color_string
end 