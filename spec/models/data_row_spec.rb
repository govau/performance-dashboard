require 'rails_helper'

RSpec.describe DataRow, type: :model do

  def get_date(str)
    Date.strptime(str, '%Y-%m-%d')
  end

  it { is_expected.to belong_to :data_table }

  describe '::within_interval' do
    let!(:dp_before)    { FactoryBot.create(:data_row, row_date: 1.day.ago ) }
    let!(:dp_beginning) { FactoryBot.create(:data_row, row_date: Date.today ) }
    let!(:dp_middle)    { FactoryBot.create(:data_row, row_date: 3.days.from_now ) }
    let!(:dp_end)       { FactoryBot.create(:data_row, row_date: 6.days.from_now ) }
    let!(:dp_after)     { FactoryBot.create(:data_row, row_date: 7.days.from_now) }

    subject { DataRow.within_interval(Date.today, 6.days.from_now) }

    it { is_expected.not_to include dp_before }
    it { is_expected.to include dp_beginning }
    it { is_expected.to include dp_middle }
    it { is_expected.to include dp_end }
    it { is_expected.not_to include dp_after }
  end

  describe '#set_value_for' do
    let(:dataset) { FactoryBot.create :dataset }
    let(:row) { FactoryBot.create :data_row, datasets: [dataset] }
    before { row.set_value_for dataset, input_value }
    let(:output_value) { row.value_for dataset }

    context 'valid values' do
      context 'float' do
        let(:input_value) { 7.5 }
        specify { expect(output_value).to eq 7.5 }
        specify { expect(row).to be_valid }
      end

      context 'integer' do
        let(:input_value) { 8 }
        specify { expect(output_value).to eq 8.0 }
        specify { expect(row).to be_valid }
      end

      context 'string representation of number' do
        let(:input_value) { '9.2' }
        specify { expect(output_value).to eq 9.2 }
        specify { expect(row).to be_valid }
      end

      context 'nil' do
        let(:input_value) { nil }
        specify { expect(output_value).to be_nil }
        specify { expect(row).to be_valid }
      end

      context 'empty string' do
        let(:input_value) { "" }
        specify { expect(output_value).to be_nil }
        specify { expect(row).to be_valid }
      end
    end

    context 'invalid values' do
      context 'non-empty string' do
        let(:input_value) { 'INVALID VALUE' }
        specify { expect(row).not_to be_valid }
      end
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :row_date }

    describe 'frequency' do
      let(:data_table) { FactoryBot.create :data_table, period: period }
      let!(:other) { FactoryBot.create :data_row, data_table: data_table,
        row_date: other_date }
      subject { FactoryBot.build :data_row, data_table: data_table,
        row_date: get_date('2016-11-14') }

      context 'no period specified' do
        let(:other_date) { get_date('2016-11-14') }
        let(:period) { 'free' }
        it { should be_valid }
      end

      context 'month' do
        let(:period) { 'month' }

        context 'too frequent' do
          let(:other_date) { get_date('2016-11-01') }
          it { should_not be_valid }
        end

        context 'correct frequency' do
          let(:other_date) { get_date('2016-10-28') }
          it { should be_valid }
        end
      end
    end
  end
end
