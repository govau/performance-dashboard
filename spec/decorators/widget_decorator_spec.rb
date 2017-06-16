require 'rails_helper'

RSpec.describe WidgetDecorator, type: :decorator do

  let(:latest_value)    { 99 }
  let(:latest_ts)       { Date.parse('2020-02-01') }

  let(:previous_value)  { 99 }
  let(:previous_ts)     { Date.parse('2020-01-01') }

  let(:unit)            { 's' }

  let(:widget)      { FactoryGirl.create(:widget_with_data, rows_count: 0,
    datasets_count: 0, last_updated_at: '2020-01-01', units: unit) }

  let(:dataset)     {
    ds = FactoryGirl.create :dataset, units: unit
    widget.data_table.datasets << ds  
    widget.datasets << ds  
    ds
  }

  let!(:latest)     { FactoryGirl.create(:data_row, row_date: latest_ts,
    data_table: widget.data_table, values: { dataset.id => latest_value })}

  let!(:previous)     { FactoryGirl.create(:data_row, row_date: previous_ts,
    data_table: widget.data_table, values: { dataset.id => previous_value })}

  subject { widget.decorate }

  its(:summary)         { is_expected.to eq 'Unchanged since Jan 2020' }
  its(:last_updated_at) { is_expected.to eq '1 Jan 2020'}
  its(:units_to_s)      { is_expected.to eq 'Seconds'}

  #TODO Refactor this portion into its own spec as it's no longer #to_chart
  describe 'rendering data for charts' do

    let(:widget)  { FactoryGirl.create(:widget_with_data, datasets_count: 2).decorate }
    let(:chart) { ApplicationController.new.render_to_string('chart/_widget', locals: { widget: widget })}
    subject(:data)  { JSON.parse(chart) }

    it { is_expected.to include('id') }
    it { is_expected.to include('name') }
    it { is_expected.to include('units') }
    it { is_expected.to include('latest') }
    it { is_expected.to include('datasets') }

    describe 'dataset' do

      subject(:chart_dataset) { data['datasets'].first }

      it { is_expected.to include('id') }
      it { is_expected.to include('data') }

      describe 'datapoint' do
        subject(:datapoint) { chart_dataset['data'].first }
        it { is_expected.to include('label') }
        it { is_expected.to include('value') }
      end
    end

    describe 'datasets' do

      let(:datasets) { ApplicationController.new.render_to_string('chart/_datasets', locals: { datasets: widget.datasets }) }
      subject(:data)  { JSON.parse(datasets) }

      it { is_expected.to have(2).datasets }
    end


  end

  describe 'up' do

    context 'decimal' do
      let(:latest_value)    { 100 }
      let(:previous_value)  { 50 }

      context '$' do
        let(:unit)    { '$' }
        its(:summary) { is_expected.to eq 'Up by $50.00 since Jan 2020' }
      end

      context 's' do
        let(:unit)    { '%' }
        its(:summary) { is_expected.to eq 'Up by 50.00% since Jan 2020' }
      end

      context 'i' do
        let(:unit)    { 'i' }
        its(:summary) { is_expected.to eq 'Up by 50 since Jan 2020' }
      end
    end

    context 'decimal' do
      let(:latest_value)    { 100 }
      let(:previous_value)  { 50.50 }

      context '$' do
        let(:unit)    { '$' }
        its(:summary) { is_expected.to eq 'Up by $49.50 since Jan 2020' }
      end

      context 's' do
        let(:unit)    { '%' }
        its(:summary) { is_expected.to eq 'Up by 49.50% since Jan 2020' }
      end
    end
  end

  describe 'down' do

    context 'decimal' do
      let(:latest_value)    { 50 }
      let(:previous_value)  { 100 }

      context '$' do
        let(:unit)    { '$' }
        its(:summary) { is_expected.to eq 'Down by $50.00 since Jan 2020' }
      end

      context 's' do
        let(:unit)    { '%' }
        its(:summary) { is_expected.to eq 'Down by 50.00% since Jan 2020' }
      end

      context 'i' do
        let(:unit)    { 'i' }
        its(:summary) { is_expected.to eq 'Down by 50 since Jan 2020' }
      end
    end

    context 'decimal' do
      let(:latest_value)    { 50.50 }
      let(:previous_value)  { 100 }

      context '$' do
        let(:unit)    { '$' }
        its(:summary) { is_expected.to eq 'Down by $49.50 since Jan 2020' }
      end

      context 's' do
        let(:unit)    { '%' }
        its(:summary) { is_expected.to eq 'Down by 49.50% since Jan 2020' }
      end
    end
  end

  describe 'unchanged' do
    let(:latest_value)    { 100 }
    let(:previous_value)  { 100 }

    context '$' do
      let(:unit)    { '$' }
      its(:summary) { is_expected.to eq 'Unchanged since Jan 2020' }
    end

    context 's' do
      let(:unit)    { '%' }
      its(:summary) { is_expected.to eq 'Unchanged since Jan 2020' }
    end

    context 'i' do
      let(:unit)    { 'i' }
      its(:summary) { is_expected.to eq 'Unchanged since Jan 2020' }
    end
  end

  describe 'size to style' do
   let(:attrs) { {} }
   let(:widget) { FactoryGirl.create(:widget_with_data, attrs) }
   subject { widget.decorate }

   context 'extra-small' do
     let(:attrs) { {:size => 'extra-small'} }
     its(:size_to_style) { is_expected.to eq 'col-xs-12 col-lg-3' }
   end

   context 'small' do
     let(:attrs) { {:size => 'small'} }
     its(:size_to_style) { is_expected.to eq 'col-xs-12 col-lg-4' }
   end

   context 'full' do
     let(:attrs) { {:size => 'extra-large'} }
     its(:size_to_style) { is_expected.to eq 'col-xs-12' }
   end
 end
end
