class TokensController < ApplicationController
  before_action :authenticate_user!

  def create
    current_user.generate_api_token!
    flash[:api_token] = current_user.api_token.to_s
    redirect_to user_url
  end
end
