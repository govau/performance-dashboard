require 'rails_helper'

RSpec.describe Dataset, type: :model do
  it { is_expected.to have_many :data_tables }
  it { is_expected.to have_many :widgets }
  it { is_expected.to validate_presence_of :name }

  describe 'measurable' do
    let(:unit)        { 'n' }
    subject(:dataset) { FactoryBot.create(:dataset, :units => unit) }

    its(:prefix) { is_expected.to eq ''}
    its(:suffix) { is_expected.to eq ''}

    describe '$' do
      let(:unit) { '$' }

      it { is_expected.to be_money }

      its(:prefix) { is_expected.to eq '$'}
      its(:suffix) { is_expected.to eq ''}
    end

    describe '%' do
      let(:unit) { '%' }

      it { is_expected.to be_percentage }

      its(:prefix) { is_expected.to eq ''}
      its(:suffix) { is_expected.to eq '%'}
    end
  end

  describe 'color' do
    let(:dataset) { FactoryBot.create(:dataset, name: name, color: color) }
    subject { dataset.color_string }

    context 'has a colour' do
      let(:color) { 0xff00 } # horrible green

      context 'KPI' do
        let(:name) { 'User satisfaction' }
        it { is_expected.to eq '#00FF00' } # overrides KPI default
      end

      context 'Other' do
        let(:name) { 'Something else' }
        it { is_expected.to eq '#00FF00' }
      end
    end

    context 'has no colour' do
      let(:color) { nil }

      context 'KPI' do
        let(:name) { 'User satisfaction' }
        it { is_expected.to eq '#F2B038' } # KPI default
      end

      context 'Other' do
        let(:name) { 'Something else' }
        it { is_expected.to be_nil }
      end
    end
  end
end
