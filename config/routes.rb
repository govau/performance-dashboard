Rails.application.routes.draw do

  devise_for :users,
    controllers: {
      sessions: "users/sessions",
      invitations: 'users/invitations'
    },
    :path => '',
    path_names: { sign_in: 'login', sign_out: 'logout' }

  ActiveAdmin.routes(self)

  namespace :admin do
    %w(dashboard datapoint dataset widget).each do |model|
      resources model.to_sym do 
        resources :audits
      end
    end
  end

  constraints CanAccessFlipperUI do
    mount Flipper::UI.app($flipper) => '/flipper'
  end

  resource :user, :only => 'show' do
    resources :tokens, :only => 'create'
  end

  namespace :users do
    resources :shared_secrets, only: [:new, :create, :index] do
      collection do
        get :code
        get :done
      end
    end
    match 'shared_secret', to: 'shared_secrets#destroy', via: :delete
  end

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :dashboards do
        resources :widgets
      end
      resources :datasets 
      resources :features, only: [:index]
      resources :widgets, only: [] do 
        get 'slices/:period/:period_start', to: 'slices#show'
        post 'slices/:period/:period_start', to: 'slices#create'
        patch 'slices/:period/:period_start', to: 'slices#update'
      end
    end
  end

  get '/editor(*path)', :to => 'editor#index', :as => 'editor'

  get root :to => 'dashboards#index'

  resources :dashboards, only: [:show] do
    member do
      get :export
    end
  end

  get 'feedback', :to => 'feedback#index'

  get '/index.html', :to => redirect('/')

  get '/copyright', :to => 'about#copyright'
  get '/api', :to => 'about#api'

end
