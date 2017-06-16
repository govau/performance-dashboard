require 'rails_helper'

RSpec.describe Api::V1::DatasetsController, :type => :controller do
  include_context 'api_schema'

  describe '#index' do
    context 'when unauthorised' do
      before { get :index }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'
      let(:schema)  { datasets_schema }
      before { get :index }
      include_examples 'api_authorized_ok'
    end
  end

  describe '#show' do
    context 'when unauthorised' do
      before { get :index, :params => { :id => 999} }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'

      context 'with unowned dataset' do
        before { get :show, :params => { :id => 999 } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with dataset' do
        let(:dataset)  { dashboard.datasets.first }
        let(:schema)  { dataset_schema }
        before { get :show, :params => { :id => dataset.id } }
        include_examples 'api_authorized_ok'
      end
    end
  end

  describe '#update' do
    context 'when unauthorised' do
      before { put :update, :params => { :id => 42 } }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'
      let(:dataset) { dashboard.datasets.first }

      context 'with unowned dataset' do
        before { put :update, :params => { :id => 999 } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with invalid data' do
        let(:status) { 400 }
        let(:schema) { error_schema }
        before { put :update, :params => { :id => dataset.id, :name => '' } }
        include_examples 'api_authorized_status_and_schema'
      end

      context 'with valid data' do
        let(:schema)  { dataset_schema }
        before { put :update, :params => { :id => dataset.id, :name => 'Vtha' } }
        include_examples 'api_authorized_ok'
      end
    end
  end
end
