require 'rails_helper'

module ControllerMacros
  def login_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryBot.create(:user_confirmed)

      sign_in user
    end
  end

  def logout_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryBot.create(:user_confirmed)

      sign_out user
    end
  end
end
