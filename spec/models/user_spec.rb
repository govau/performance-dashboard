require 'rails_helper'

RSpec.describe User, type: :model do

  it { is_expected.to have_many :tokens }
  it { is_expected.to have_many :dashboards }

  describe '#generate_session_token!' do
    subject(:user) { FactoryBot.create(:user) }

    context do
      let!(:token) { user.generate_session_token! }
      it { is_expected.to have(1).tokens }
      its(:session_token) {is_expected.to eq token }

      it { expect(token).to be_session }
    end

    context 'with existing session token' do
      let!(:expired_token) { user.generate_session_token! }
      let!(:token) {  user.generate_session_token! }

      it { is_expected.to have(2).tokens }
      it { expect(expired_token.reload).to be_expired }
      it { expect(token.reload).to be_active }

      its(:session_token) {is_expected.to eq token }
    end

    context 'with an api token' do
      let!(:api_token) { Token.create! }
      let!(:expired_token) { user.generate_session_token! }
      let!(:token) {  user.generate_session_token! }

      subject(:user) { FactoryBot.create(:user, :tokens => [api_token]) }

      it { is_expected.to have(3).tokens }

      it { expect(expired_token.reload).to be_expired }
      it { expect(token.reload).to be_active }
      it { expect(api_token.reload).to be_active }

      its(:session_token) {is_expected.to eq token }
    end
  end

  describe 'tokens' do
    let(:active)   { Token.create! }
    let(:expired)  { FactoryBot.create(:token_expired) }

    subject(:user) { FactoryBot.create(:user, :tokens => [expired, active]) }

    describe 'expiration' do
      its(:token) { should eq active }
      its(:token) { should_not eq expired }
    end

    describe '#authenticate!' do
      context 'active token' do
        let(:authenticated) { User.authenticate!(active) }
        it { expect(user).to eq authenticated }
      end

      context 'expired token' do
        it { expect{ User.authenticate!(expired) }.to raise_error(ActiveRecord::RecordNotFound) }
      end

      context 'invalid token' do
        it { expect{ User.authenticate!('blahvtha') }.to raise_error(ActiveRecord::RecordNotFound) }
      end
    end
  end

  describe 'unique association rows' do
    subject { FactoryBot.create(:user) }
    let(:dashboard) { FactoryBot.create(:dashboard) }

    before do
      subject.dashboards << dashboard
    end

    specify { expect { subject.dashboards << dashboard }.to raise_error ActiveRecord::RecordInvalid }
  end

  describe 'permissions' do
    subject { FactoryBot.create(:user) }

    context 'no dashboards' do
      specify { expect(subject.dashboards.count).to eq 0 }
    end

    context 'with a dashboard' do
      let(:dashboard) { FactoryBot.create(:dashboard_with_widgets) }

      before do
        subject.dashboards << dashboard
      end

      specify { expect(subject.permissions.count).to eq 1 }
      specify { expect(subject.datasets).to include dashboard.datasets.first }
    end
  end
end
