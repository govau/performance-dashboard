require 'rails_helper'

RSpec.describe Token, type: :model do
  subject(:token) { Token.create! }

  it { is_expected.to belong_to :user }

  describe 'generate on create' do
    its(:token) { should be_present }
    its(:to_s) { should eq token.token }
  end

  describe 'expire!' do
    before  { token.expire! }
    it      { should be_expired }
    it      { should_not be_active }
  end

  describe 'active' do
    let!(:active)   { Token.create! }
    let!(:expired)  { FactoryGirl.create(:token_expired) }

    subject { Token.active.all }
    it      { is_expected.to have(1).token }
  end

  describe 'expired' do
    let!(:active)   { Token.create! }
    let!(:expired)  { FactoryGirl.create(:token_expired) }

    subject { Token.expired.all }
    it      { is_expected.to have(1).token }
  end

  describe 'tokens cannot be reused' do
    let(:active)      { Token.create! }

    it { expect{ Token.create!(:token => token.to_s) }.to raise_error ActiveRecord::RecordNotUnique }
  end

  describe 'authenticate!' do
    let!(:active)   { Token.create! }
    let!(:expired)  { FactoryGirl.create(:token_expired) }

    context 'active token' do
      let(:authenticated) { Token.authenticate!(active) }

      it { expect(active).to eq authenticated }
    end

    context 'expired token' do
      it { expect{ Token.authenticate!(expired) }.to raise_error(ActiveRecord::RecordNotFound) }
    end

    context 'invalid token' do
      it { expect{ Token.authenticate!('blahvtha') }.to raise_error(ActiveRecord::RecordNotFound) }
    end
  end

end
