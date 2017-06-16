class ApplicationController < ActionController::Base
  include ActionController::Caching::Pages
  include Sslify
  include CacheInvalidation

  protect_from_forgery with: :exception

  before_action :store_current_location, :unless => :devise_controller?
  before_action :check_auth_flag, if: :devise_controller?

  private

  def store_current_location
    store_location_for(:user, request.url)
  end

  def after_sign_in_path_for(_resource)
    if session[:user_return_to] =~ /admin/ && current_user&.admin?
      session[:user_return_to]
    else
      editor_path
    end
  end

  def access_denied(exception)
    redirect_to root_path, :alert => exception.message
  end

  def two_factor_authentication_path_for(resource_or_scope)
    if current_user.otp_secret_key.present?
      super
    else
      users_shared_secrets_path
    end
  end

  def check_auth_flag
    head 403 unless $flipper[:auth].enabled?
  end

end
