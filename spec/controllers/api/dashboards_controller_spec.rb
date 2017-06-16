require "rails_helper"

RSpec.describe Api::V1::DashboardsController, :type => :controller do
  include_context 'api_schema'

  describe "#index" do

    context 'when unauthorised' do
      before { get :index }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'
      let(:schema)  { dashboards_schema }

      before { get :index }

      include_examples 'api_authorized_ok'
    end

  end

  describe "#show" do
    let(:schema)  { dashboard_schema }

    context 'when unauthorised' do
      before { get :show, :params => { :id => 999 } }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'

      context 'with unowned dashboard' do
        before { get :show, :params => { :id => 999 } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with dashboard and widget' do
        before { get :show, :params => { :id => dashboard.id } }

        include_examples 'api_authorized_ok'
      end

    end
  end

  describe "#update" do

    context 'when unauthorised' do
      before { get :index, :params => { :id => 42 } }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'

      context 'with unowned dashboard' do
        let(:other) { FactoryGirl.create(:dashboard_with_widgets) }
        before { put :update, :params => { :id => other.id } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with valid data' do
        let(:schema)  { dashboard_schema }

        before { put :update, :params => { :id => dashboard.id, :name => 'Vtha' } }

        it { expect(dashboard.reload.name).to eq 'Vtha' }

        include_examples 'api_authorized_ok'
      end

      context 'with invalid data' do
        let(:status)  { 400 }
        let(:schema)  { error_schema }

        before { put :update, :params => { :id => dashboard.id, :name => '' } }

        include_examples 'api_authorized_status_and_schema'
      end

    end


  end

end
