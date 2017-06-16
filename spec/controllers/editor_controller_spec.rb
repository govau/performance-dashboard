require 'rails_helper'
require 'devise'

RSpec.describe EditorController, :type => :controller do

  describe 'log into the controller' do
    login_user

    before{ get :index }

    it{ expect(subject.current_user).to be_present }

    it { expect(subject.current_user.session_token).to be_present }

    it { expect(response).to be_success }
  end

  describe 'log out from the controller' do
    logout_user

    it 'should not have a current_user' do
      expect(subject.current_user).to eq(nil)
    end

    it 'should get index page unsuccessfully' do
      get :index
      expect(response).to_not be_success
    end
  end
end
