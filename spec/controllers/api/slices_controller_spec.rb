require "rails_helper"

RSpec.describe Api::V1::SlicesController, type: :controller do
  include_context 'api_schema'

  render_views

  let(:widget) { FactoryBot.create(:widget_with_data, datasets_count: 2) }
  let(:ds_1) { widget.data_table.datasets.first }
  let(:ds_2) { widget.data_table.datasets.second }
  let(:user) { FactoryBot.create(:user_with_token,
    dashboards: [widget.dashboard])}

  let(:authorization) {
    ActionController::HttpAuthentication::Token.encode_credentials(
      user.token) }

  before do
    request.accept = 'application/json'
    request.env['HTTP_AUTHORIZATION'] = authorization
    req
  end

  describe "#show" do
    let(:period_start) { widget.data_table.data_rows.first.row_date.beginning_of_month }
    let(:req) { get :show, params: { widget_id: widget.id, period: 'month',
      period_start: period_start.strftime('%Y-%m-%d') } }

    let(:schema) { slice_schema }
    include_examples 'api_authorized_ok'
  end

  describe '#create' do
    let(:req) { post :create, params: { widget_id: widget.id, period: 'month',
      period_start: ts,
      groups: [ds_1, ds_2].collect {|ds| { dataset_id: ds.id, value: data_value } } } }

    context 'valid value' do
      let(:data_value) { 500 }

      context 'when data does not already exist for this period' do
        let(:ts) { widget.decorate.series_end.advance(months: 1) }
        let(:schema) { slice_response_schema }
        include_examples 'api_authorized_ok'

        specify do
          [ds_1, ds_2].each do |dataset|
            row = widget.data_table.data_rows.by_time.last
            expect(row.value_for(dataset)).to eq 500
            expect(row.row_date).to eq ts
          end
        end
      end

      context 'when data already exists for this period' do
        let(:ts) { widget.decorate.series_start.to_date }
        specify { expect(response).to have_http_status 422 }
      end
    end

    context 'invalid value' do
      context 'empty string' do
        let(:data_value) { '' }
        let(:ts) { widget.decorate.series_end.advance(months: 1) }

        specify { expect(widget.data_table.data_rows.by_time.last.value_for(ds_1)).to be_nil }
      end
    end
  end

  describe '#update' do
    let(:ts) { widget.decorate.series_start.to_date }
    let(:req) { post :update, params: { widget_id: widget.id, period: 'month',
      period_start: ts,
      groups: [ds_1, ds_2].collect {|ds| { dataset_id: ds.id, value: 500 } } } }

    let(:schema) { slice_response_schema }

    before { widget.reload }

    include_examples 'api_authorized_ok'

    specify do
      [ds_1, ds_2].each do |dataset|
        row = widget.data_table.data_rows.by_time.first
        expect(row.value_for(dataset)).to eq 500
        expect(row.row_date).to eq ts
      end
    end
  end
end
