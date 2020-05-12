require 'rails_helper'

RSpec.describe DataTableDecorator, type: :decorator do
  let(:data_table) { FactoryBot.create :data_table }
  subject { DataTableDecorator.decorate(data_table) }

  describe 'calculations' do
    let!(:latest) { FactoryBot.create :data_row, data_table: data_table,
      row_date: Date.today, datasets: [data_table.datasets.first],
      value: latest_value }
    let!(:previous) { FactoryBot.create :data_row, data_table: data_table,
      row_date: 1.month.ago, datasets: [data_table.datasets.first],
      value: previous_value }

    describe 'latest and previous' do
      let(:latest_value) { 99 }
      let(:previous_value) { 99 }
      its(:latest) { is_expected.to eq latest }
      its(:previous) { is_expected.to eq previous }
    end

    context 'up' do
      let(:latest_value)    { 100 }
      let(:previous_value)  { 50 }

      it { is_expected.to be_trending }
      it { is_expected.to be_up }
      it { is_expected.to_not be_down }

      its(:difference)  { is_expected.to eq 50 }
      its(:trend)       { is_expected.to eq 'up' }
    end

    context 'down' do
      let(:latest_value)    { 42 }
      let(:previous_value)  { 99 }

      it { is_expected.to be_trending }
      it { is_expected.to be_down }
      it { is_expected.to_not be_up }

      its(:difference)  { is_expected.to eq -57 }
      its(:trend)       { is_expected.to eq 'down' }
    end

    context 'unchanged' do
      let(:latest_value)    { 42 }
      let(:previous_value)  { 42 }

      it { is_expected.to_not be_trending }
      it { is_expected.to be_down }
      it { is_expected.to_not be_up }

      its(:difference)  { is_expected.to eq 0 }
      its(:trend)       { is_expected.to eq 'unchanged' }
    end
  end
end
