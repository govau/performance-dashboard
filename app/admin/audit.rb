ActiveAdmin.register ::Audited::Audit, as: 'Audit' do
  decorate_with AuditDecorator

  controller do 
    include ActiveAdmin::ViewsHelper

    belongs_to :dashboard, :dataset, :widget, :user,
      optional: true, polymorphic: true
  end

  actions :all, except: [:edit, :destroy, :new]

  index do
    column :id
    column 'Event', :to_pretty_s
    column 'Object', :auditable
    actions
  end

  show title: :to_pretty_s do
    attributes_table do
      row :created_at
      row :user
      row('Object') {|a|
        if a.auditable.present? 
          a.auditable
        else
          '(No longer exists)'
        end }
      row :action
      row :version
      row :remote_address
      row('Event') {|a| a.audited_changes.to_json }
    end
  end

  controller do 
    def scoped_collection 
      if params[:dataset_id]
        # byebug
        dataset = Dataset.find params[:dataset_id]
        super.reorder(nil).or(
          dataset.associated_audits.reorder(nil))
      else
        super
      end
    end
  end

  filter :user, collection: proc { User.all }
  filter :auditable_type, label: 'Entry type'
  filter :action, as: :select, collection: ['create', 'update', 'destroy']
  filter :created_at, label: 'Date range', as: :date_range
end
