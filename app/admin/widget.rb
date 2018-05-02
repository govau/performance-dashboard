ActiveAdmin.register Widget do
  permit_params :name, :description, :pos, :row, :type, :size, :options, :is_hero,
    :dashboard_id, :units, dataset_ids: []

  sidebar 'Details', only: [:show, :edit] do
    ul do
      li link_to 'Data rows', admin_data_rows_path(q: { data_table_id_eq: widget.data_table_id})
    end
  end

  index do
    selectable_column
    column :id
    column :name
    column :row
    column :pos
    actions
  end

  filter :name
  filter :dashboard

  action_item :new_fact, only: :index do
    link_to 'New fact', new_fact_admin_widgets_path
  end

  collection_action :new_fact, method: :get do
    @dashboards = Dashboard.all
  end

  form do |f|
    f.inputs 'Widget' do
      f.semantic_errors *f.object.errors.keys
      f.input :dashboard
      f.input :name, as: :string
      f.input :row
      f.input :pos
      f.input :description
      f.input :options, input_html: { value: resource.options.to_json }
      f.input :size, as: :select, collection: Widget::SIZES
      f.input :type, as: :select, collection: Widget::TYPES
      f.input :units, as: :select, collection: %w(% $ n s i f)
      f.input :is_hero
      f.input :datasets, as: :select, collection: Dataset.order(:id),
        member_label: ->(d) { "#{d.id} #{d.name}" }
    end

    f.actions
  end

  controller do
    def update(options={}, &block)
      if params.dig(:widget, :options).present?
        begin
          resource.options = JSON.parse params[:widget].delete(:options)
        rescue JSON::ParserError => e
          redirect_to edit_admin_widget_path(resource),
            alert: "Invalid JSON structure. Details: #{e.message}"
          return
        end
      else
        resource.options = {}
        params[:widget].delete :options
      end

      super
    end
  end
end
