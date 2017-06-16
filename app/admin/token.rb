ActiveAdmin.register Token do
  decorate_with TokenDecorator

  actions :all, except: [:edit, :update, :destroy]

  permit_params :user_id, :session

  filter :user
  filter :session
  filter :api

  controller do
    # def scoped_collection
    #   super.api.includes(:user)
    # end
  end

  index :download_links => false  do
    selectable_column
    column :display_name
    column :user
    column :session
    column :active? do | token|
      status_tag token.active?
    end
    actions defaults: true do |token|
      [link_to('Expire', expire_admin_token_path(token), :method => 'patch'),
      link_to('Display', display_admin_token_path(token))].join(" ").html_safe
    end
  end

  form do |f|
    f.inputs 'Token' do
      f.input :session, :as => :hidden, :input_html => { :value => false }

      if resource.new_record?
        f.input :user, :required => true, :as => :select, :collection => User.by_email.all
        f.input :expired_at
      else
        f.input :user, :as => :string, :input_html => {:value => resource.user.email, :class => '', :disabled => true}
      end

      if resource.expired?
        f.input :expired_at, :as => :string, :input_html => {:value => resource.expired_at, :class => '', :disabled => true}
      end
    end

    f.actions
  end

  show do
    panel 'Token' do
      attributes_table_for token do
        row :id
        row :user
        row(:active ) { |t| status_tag t.active? }
        row(:session) { |t| status_tag t.session? }
        row :expired_at
        row :created_at
        row :updated_at
      end
    end
  end

  action_item :expire_token, :only => [:show, :edit], :if => -> { resource.active? }  do
    link_to('Expire Token', expire_admin_token_path(resource), :method => 'patch')
  end

  action_item :display_token, :only => [:show, :edit] do
    link_to('Display Token', display_admin_token_path(resource))
  end

  member_action :display, :method => :get do
    redirect_to resource_path(resource), notice: resource.to_s
  end

  member_action :expire, :method => :patch do
    resource.expire! if resource.active?
    redirect_to resource_path, notice: 'Token Expired'
  end

end
