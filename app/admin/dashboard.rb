ActiveAdmin.register Dashboard do
  permit_params :name, :url, :password, :notes, :display_hero, :display_kpis,
    :published_at, :description, :target_users, :organisation_id,
    :generate_hero, widgets_attributes: [ :id, :pos ], :notes => []

  sidebar 'Details', only: [:show, :edit] do
    ul do
      li link_to 'Widgets', admin_widgets_path(q: { dashboard_id_eq: dashboard.id})
      li link_to 'Audits', admin_dashboard_audits_path(dashboard)
    end
  end

  action_item :toggle_publish, only: :show do
    if dashboard.published?
      link_to 'Unpublish Dashboard', unpublish_admin_dashboard_path(dashboard), method: :patch
    else
      link_to 'Publish Dashboard', publish_admin_dashboard_path(dashboard), method: :patch
    end
  end

  member_action :unpublish, method: :patch do
    resource.update_attribute :published_at, nil
    invalidate_dashboards resource
    flash[:notice] = 'Dashboard unpublished'
    redirect_to admin_dashboard_path resource
  end

  member_action :publish, method: :patch do 
    resource.update_attribute :published_at, Time.now
    invalidate_dashboards resource
    flash[:notice] = 'Dashboard published'
    redirect_to admin_dashboard_path resource
  end

  index do
    selectable_column
    column :id
    column :name
    column :organisation
    actions
  end

  filter :name
  filter :organisation

  controller do
    include CacheInvalidation
    include ActiveAdmin::ViewsHelper

    def update(options={}, &block)
      if params.dig(:dashboard, :notes).present?
        begin
          resource.notes = JSON.parse params[:dashboard].delete(:notes)
        rescue JSON::ParserError => e
          redirect_to edit_admin_dashboard_path(resource),
            alert: "Invalid JSON structure. Details: #{e.message}"
          return
        end
      end

      super
    end

    def create(options={}, &block)
      @generate_hero = params[:dashboard].delete :generate_hero

      if params.dig(:dashboard, :notes).present?
        begin
          params[:dashboard][:notes] = JSON.parse params[:dashboard].delete(:notes)
        rescue JSON::ParserError => e
          redirect_to new_admin_dashboard_path,
            alert: "Invalid JSON structure. Details: #{e.message}"
          return
        end
      end

      create!

      if @generate_hero
        data_table = DataTable.create! dashboard: resource

        hero = resource.widgets.create! dashboard: resource,
          name: 'Kpis',
          type: 'full',
          size: 'extra-large',
          pos: 0,
          row: 0,
          units: 'n',
          last_updated_at: (DateTime.now << 1),
          data_table: data_table

        row = data_table.data_rows.build(row_date: (DateTime.now << 1).beginning_of_month)

        datasets = Widget::KPIS.each do |kpi|
          units = if 'Cost per transaction' == kpi 
            '$'
          else
            '%'
          end

          dataset = Dataset.create! organisation_id: resource.organisation_id, 
            name: kpi,
            label: kpi,
            units: units
          
          widget = resource.widgets.create! dashboard: resource,
            name: kpi,
            description: kpi,
            type: 'kpi-sparkline',
            size: 'extra-small',
            pos: 0,
            row: 0,
            units: units,
            last_updated_at: (DateTime.now << 1),
            data_table: data_table
          
          data_table.datasets << dataset
          widget.datasets << dataset
          hero.datasets << dataset
          row.set_value_for dataset, nil
          dataset
        end

        row.save!
      end 
    end
  end

  form do |f|
    f.inputs "Dashboard" do
      f.input :organisation
      f.input :name, as: :string
      f.input :url, as: :string
      f.input :description, as: :string, label: 'What is the service?'
      f.input :target_users, as: :string, label: 'Who is the user group?'
      f.input :password, as: :string, label: 'Password (blank for none)'

      if f.object.new_record? 
        f.input :notes, input_html: { value: JSON.pretty_generate(
          [{ title: 'Title of a note',
             body: 'Body of a note.'},
           { title: 'Another note',
             body: 'Use this structure to add more notes...'}]) }
      else
        notes = JSON.pretty_generate(object.notes || {}) rescue object.notes
        f.input :notes, input_html: { value: notes }
      end

      f.input :published_at
    end 

    f.inputs 'Widgets' do 
      if f.object.new_record? 
        li do 
          label_tag('generate_hero', 'Generate hero')+
            check_box_tag('dashboard[generate_hero]', '1', true)
        end
      else
        f.has_many :widgets, heading: 'Re-order widgets', sortable: :pos, new_record: false do |w|
          w.input :name, as: :string, input_html: { disabled: true }
        end

        f.input :display_hero
        f.input :display_kpis
      end
    end

    f.actions
  end

end
