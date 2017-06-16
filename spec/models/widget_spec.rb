require 'rails_helper'

RSpec.describe Widget, type: :model do

  let(:size)   { %w(extra-small small medium large extra-large) }
  let(:type)   { %w(bar fact full kpi-sparkline line pie sparkline) }
  let(:units)  { %w(% $ n) }

  it { is_expected.to belong_to :dashboard }
  it { is_expected.to belong_to :data_table }

  it { is_expected.to validate_presence_of :name }

  it { should validate_presence_of(:size) }
  it { should validate_presence_of(:type) }
  it { should validate_presence_of(:units) }

  it { is_expected.to validate_inclusion_of(:size).in_array(size) }
  it { is_expected.to validate_inclusion_of(:type).in_array(type) }
  it { is_expected.to validate_inclusion_of(:units).in_array(units) }

  its(:data_updated_at) { is_expected.to_not be_present }

  describe '#has_data?' do 
    context 'No data table' do 
      subject { FactoryGirl.create :widget }
      it { is_expected.not_to have_data }
      it { is_expected.not_to have_current_data }
    end

    context 'Data table with no rows' do 
      subject { FactoryGirl.create :widget_with_data, rows_count: 0 }
      it { is_expected.not_to have_data }
      it { is_expected.not_to have_current_data }
    end

    context 'Data table with rows' do 
      subject { FactoryGirl.create :widget_with_data }
      it { is_expected.to have_data }
      it { is_expected.to have_current_data }
    end

    context 'Data table whose rows have null values' do 
      subject { FactoryGirl.create :widget_with_data, rows_count: 1 }

      before do
        subject.data_table.data_rows.each do |row|
          subject.datasets.each do |ds|
            row.set_value_for ds, nil
          end

          row.save!
        end
      end   

      it { is_expected.to have_data }
      it { is_expected.not_to have_current_data }
    end
  end

  describe 'options' do
    subject(:widget) { FactoryGirl.create(:widget,
      options: {'stacking' => 'percentage', 'displayRoundedData' => true}) }

    its(:options) {
      is_expected.to include('stacking')
      is_expected.to include('displayRoundedData')
    }
    it { expect(widget.options['stacking']).to eq 'percentage' }
    it { expect(widget.options['displayRoundedData']).to eq true }

  end

  describe 'kpis' do
    before {
      Widget::KPIS.each{ |n| FactoryGirl.create(:widget, :name => n) }
    }
    subject { Widget.kpis }
    it { is_expected.to have(4).widgets }
  end

  describe 'hero' do
    before {
      FactoryGirl.create(:widget, :is_hero => true)
    }
    subject { Widget.hero }
    it { is_expected.to have(1).widget }
  end

  describe 'units' do
    subject(:widget) { FactoryGirl.create(:widget, :units => units) }

    context 'seconds' do
      let(:units) { 's' }
      its(:suffix) { is_expected.to eq 's' }
      its(:prefix) { is_expected.to eq '' }
    end

    context 'percentage' do
      let(:units) { '%' }
      its(:suffix) { is_expected.to eq '%' }
      its(:prefix) { is_expected.to eq '' }
    end

    context 'money' do
      let(:units) { '$' }
      its(:suffix) { is_expected.to eq '' }
      its(:prefix) { is_expected.to eq '$' }
    end
  end
end
