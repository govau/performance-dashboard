require 'rails_helper'

RSpec.describe Users::SharedSecretsController, type: :controller do
  let(:flags) { %w(auth two_factor).collect {|flag| $flipper[flag.to_sym]} }

  before { flags.each &:enable }
  after { flags.each &:disable }

  login_user

  describe '#create'
    context 'before shared secret exists' do
      before do
        post :create
      end

      specify { expect(response).to redirect_to new_users_shared_secret_path }
    end

    context 'after setting up shared secret' do

    before do
      get :new # Creates shared secret
      post :create, params: { code: code }
    end

    context 'correct code' do
      let(:code) { ROTP::TOTP.new(subject.session[:setup_totp]).now }

      specify { expect(response).to redirect_to done_users_shared_secrets_path }
      specify { expect(subject.session[:setup_totp]).to be_nil }
    end

    context 'incorrect code' do
      let(:code) { '123123' }

      it { is_expected.to render_template :new }
    end
  end

  describe '#destroy' do
    before do
      get :new # Creates shared secret
      delete :destroy
    end

    specify { expect(response).to redirect_to users_shared_secrets_path }
    specify { expect(subject.session[:setup_totp]).to be_nil }
  end

  describe '#protect_from_abuse' do
    before do
      subject.current_user.update_attribute :otp_secret_key, 'already_set'
      get :new
    end

    specify { expect(response.status).to eq 403 }
  end
end
