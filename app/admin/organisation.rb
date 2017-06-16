require 'organisation_importer'

ActiveAdmin.register Organisation do
  permit_params :name, :url

  index do
    selectable_column
    id_column
    column :name
    actions
  end

  filter :name

  form do |f|
    f.inputs "Organisation" do
      f.input :name, :as => :string
      f.input :url, :as => :string
    end
    f.actions
  end

  action_item :import, only: :show do
    link_to 'Import JSON', import_form_admin_organisation_path(organisation)
  end

  member_action :import_form, method: :get do
    @organisation = resource
  end

  member_action :import, method: :patch do
    if params.dig(:organisation, :data).present? &&
        params.dig(:organisation, :definition).present?
      data_json = params[:organisation][:data].read
      definition_json = params[:organisation][:definition].read

      importer = OrganisationImporter.new resource, data_json, definition_json,
        params.dig(:organisation, :dashboard_id).presence

      begin
        importer.import!
        invalidate_dashboards(*resource.dashboards)
        redirect_to resource_path(resource), notice: 'JSON import complete.'
      rescue JSON::ParserError => e
        redirect_to import_form_admin_organisation_path(resource),
          alert: "Malformed JSON. Details: #{e.message}"
      rescue JSON::Schema::ValidationError => e
        redirect_to import_form_admin_organisation_path(resource),
          alert: "Invalid JSON structure. Details: #{e.message}"
      end
    else
      redirect_to import_form_admin_organisation_path(resource),
        alert: 'Please provide both data and definition JSON files.'
    end
  end
end
