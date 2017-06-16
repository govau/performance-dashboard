ActiveAdmin.register DataRow do
  decorate_with DataRowDecorator
  permit_params :row_date, :values, :data_table_id
  after_create :save_values

  filter :data_table_id, as: :select
  filter :row_date

  show do 
    attributes_table do
      row :id
      row :dashboard
      row :data_table_id do |data_row|
        data_row.data_table_id
      end
      row 'Widget(s)' do |data_row| 
        ul do 
          data_row.relevant_widgets.each do |w|
            li do 
              w.name
            end
          end
        end      
      end
      row :row_date
      row :values do |data_row|
        ul do 
          data_row.pretty_values.each do |k, v|
            li do 
              strong do 
                "#{k}:"
              end
              span do 
                v 
              end
            end
          end
        end
      end
    end
  end

  index do
    selectable_column
    column :id
    column :dashboard 
    column 'Widget(s)' do |data_row| 
      ul do 
        data_row.relevant_widgets.each do |w|
          li do 
            w.name
          end
        end
      end      
    end
    column :row_date
    column :values do |data_row|
      ul do 
        data_row.pretty_values.each do |k, v|
          li do 
            strong do 
              "#{k}:"
            end
            span do 
              v 
            end
          end
        end
      end
    end
    actions
  end

  form do |f|
    f.inputs 'Data row' do
      f.input :data_table_id
      f.input :row_date
      f.input :values, input_html: { value: resource.values.to_json }
    end
    f.actions
  end

  controller do
    def update(options={}, &block)
      if values = parse_values 
        values.each do |k, v|
          resource.set_value_for k, v
        end

        super
      end
    end

    def create(options={}, &block)
      if @values = parse_values
        super
      end
    end

    def save_values(row)
      if @values.present?
        @values.each do |k, v|
          row.set_value_for k, v
        end
      end

      row.save!
    end

    def parse_values
      if params.dig(:data_row, :values).present?
        begin
          return JSON.parse params[:data_row].delete :values
        rescue JSON::ParserError => e
          redirect_to edit_admin_data_row_path(resource),
            alert: "Invalid JSON structure. Details: #{e.message}"
        end
      else
        redirect_to edit_admin_data_row_path(resource),
          alert: 'No values supplied!'
      end
    end
  end
end
