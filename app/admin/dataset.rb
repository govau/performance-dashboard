ActiveAdmin.register Dataset do
  permit_params :name, :label, :units, :notes, :color_string

  sidebar 'Details', only: [:show, :edit] do
    ul do
      li link_to 'Audits', admin_dataset_audits_path(dataset)
    end
  end

  index do
    selectable_column
    column :id
    column :name
    column :color do |dataset|
      if dataset.color.present?
        span style: "color:#{dataset.color_string}" do 
          '█████'
        end
        span do 
          dataset.color_string
        end
      end
    end
    column :units
    column :dashboard
    actions
  end

  show do 
    attributes_table do
      row :id
      row :name
      row :color do |dataset|
        dataset.color_string
      end
      row :widgets do |dataset|
        ul do 
          dataset.widgets.each do |widget|
            li do 
              "#{widget.name} (#{widget.dashboard.name})"
            end
          end
        end
      end
      row :period
      row :notes
      row :created_at 
      row :updated_at 
    end
  end

  filter :name
  filter :id
  filter :units

  form do |f|
    f.inputs 'Dataset' do
      f.input :name, as: :string
      f.input :color_string, as: :string, label: 'Color', hint: 'Leave blank for default color'
      f.input :label, as: :string
      f.input :units, as: :select, collection: %w(% $ n s i f)
      f.input :notes
    end
    f.actions
  end

end
