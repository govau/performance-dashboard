ActiveAdmin.register User do
  permit_params :email, :password, :admin, :password_confirmation,
    :dashboard_ids => [], :dataset_ids => []

  filter :email

  sidebar 'Details', only: [:show, :edit] do
    ul do
      li link_to 'Audits', admin_audits_path(q: { user_id_eq: user.id })
    end
  end

  actions :all, :except => [:new]

  action_item :view, only: :index do
    link_to 'Invite user', new_user_invitation_path
  end

  action_item :clear_2fa, only: :show do
    link_to 'Clear 2FA', unlock_admin_user_path(user), method: :patch    
  end

  member_action :unlock, method: :patch do
    resource.otp_secret_key = nil
    resource.second_factor_attempts_count = 0
    resource.save
    flash[:notice] = 'User unlocked'
    redirect_to admin_user_path resource
  end

  index do
    selectable_column 
    column :email
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    column :confirmed_at
    column :dashboards do | user |
      user.dashboards.count
    end
    column :datasets do | user |
      user.dashboards.count
    end
    column :admin
    actions
  end

  form do |f|
    f.inputs 'User Details' do
      if resource.new_record?
        f.input :email
        f.input :password
        f.input :password_confirmation
      else
        f.input :email, :as => :string, :input_html => {:value => resource.email, :class => '', :disabled => true}
      end
    end

    f.inputs 'Dashboards' do
      f.input :dashboards, :as => :select, :collection => Dashboard.by_name.all, :input_html => {:multiple => true}
    end

    f.inputs 'Access level' do 
      f.input :admin, label: 'Grant admin access to this user (warning: confers great power)'
    end

    f.actions
  end

  show do
    panel 'User' do
      attributes_table_for user do
        row :id
        row :email
      end
    end
    panel 'Dashboards' do
      attributes_table_for user do
        user.dashboards.each do |dashboard|
          row ' ' do
            link_to(dashboard.name, admin_dashboard_path(dashboard))
          end
        end
      end
    end

    panel 'Details' do
      attributes_table_for user do
        row :sign_in_count
        row :current_sign_in_at
        row :last_sign_in_at
        row :last_sign_in_ip
        row :confirmed_at
        row :failed_attempts
        row :locked_at
        row :created_at
        row :updated_at
      end
    end
  end

end
