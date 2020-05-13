require 'rails_helper'

RSpec.describe DataTable, type: :model do

  it { is_expected.to belong_to :dashboard }
  it { is_expected.to have_many :widgets }
  it { is_expected.to have_many :datasets }
  it { is_expected.to have_many :data_rows }

  describe 'metadata' do
    subject { FactoryBot.create(:data_table, rows_count: 4) }

    describe 'series start and end' do
      its(:series_start) { is_expected.to eq subject.data_rows.by_time.first.row_date }
      its(:series_end) { is_expected.to eq subject.data_rows.last.row_date }
    end

    describe 'data_updated_at' do
      let(:data_row) { subject.data_rows.latest_updated.first }
      specify { expect(subject.data_updated_at).to eq data_row.updated_at }
    end
  end

  describe '#slice_data' do
    let!(:widget) { FactoryBot.create(:widget_with_data, datasets_count: 2,
      rows_count: 4) }
    let(:data_table) { widget.data_table }

    let!(:ds1) { data_table.datasets.first }
    let!(:ds2) { data_table.datasets.last }

    let(:period_start) { data_table.data_rows.by_time.first.row_date.beginning_of_month }
    subject { data_table.slice_data(widget, period, period_start).groups }

    let(:first_row) { data_table.data_rows.by_time.first }

    context 'simple case, no aggregation' do
      let(:period) { 'month' }

      it { is_expected.to eq({
        ds1.id => first_row.value_for(ds1),
        ds2.id => first_row.value_for(ds2)
      }) }
    end

    context 'aggregation' do
      let(:period) { 'century' }

      def sum_value(data_table, dataset)
        data_table.data_rows.sum do |row|
          row.value_for dataset
        end
      end

      context 'mean' do
        # Default slice aggregation is 'mean'
        it { is_expected.to eq({
          ds1.id => sum_value(data_table, ds1) / data_table.data_rows.count,
          ds2.id => sum_value(data_table, ds2) / data_table.data_rows.count
        }) }
      end

      context 'sum' do
        before do
          data_table.slice_aggregation = 'sum'
        end

        it { is_expected.to eq({
          ds1.id => sum_value(data_table, ds1),
          ds2.id => sum_value(data_table, ds2)
        }) }
      end

      context 'with nil values' do
        before do
          data_table.data_rows.each do |row|
            data_table.datasets.each do |ds|
              row.set_value_for ds, nil
            end

            row.save!
          end
        end

        it { is_expected.to eq({
          ds1.id => nil,
          ds2.id => nil
        }) }
      end
    end
  end

  describe '#slices' do
    let(:widget) { FactoryBot.create :widget_with_data, datasets_count: 2,
      rows_count: 4 }
    let!(:data_table) { widget.data_table }

    context 'Without limit' do
      subject { data_table.slices widget }
      specify { expect(subject.size).to eq 4 }
      specify { expect(subject.first.period_start).to be < subject.last.period_start }
    end

    context 'With limit' do
      subject { data_table.slices widget, limit: 2 }
      specify { expect(subject.size).to eq 2 }
      specify { expect(subject.first.period_start).to be < subject.last.period_start }
    end
  end
end
