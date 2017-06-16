class Users::SessionsController < Devise::SessionsController
# before_action :configure_sign_in_params, only: [:create]

  skip_before_action :require_no_authentication, only: [:create]

  layout 'devise'

  # GET /resource/login
  def new
    super
  end

  # POST /resource/login
  def create
    super
  end

  # DELETE /resource/logout
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
