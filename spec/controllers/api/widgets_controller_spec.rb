require 'rails_helper'

RSpec.describe Api::V1::WidgetsController, :type => :controller do
  include_context 'api_schema'

  render_views

  before do
    request.accept = 'application/json'
  end

  describe '#index' do
    let(:req) { get :index, format: :json, params: { dashboard_id: did } }

    context 'when unauthorised' do
      let(:did) { 9999 }
      before { req }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'
      before { req }

      context 'with unowned dashboard' do
        let(:other) { FactoryGirl.create(:dashboard_with_widgets) }
        let(:did) { other.id }
        it { expect(response).to have_http_status(404) }
      end

      context 'with dashboard' do
        let(:schema)  { widgets_schema }
        let(:did) { dashboard.id }
        include_examples 'api_authorized_ok'
      end
    end
  end


  describe '#show' do
    let(:req) { get :show, format: :json, params: { dashboard_id: did, id: wid } }

    context 'when unauthorised' do
      let(:did) { 999 }
      let(:wid) { 999 }
      before { req }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'
      before { req }

      context 'with unowned dashboard' do
        let(:did) { 999 }
        let(:wid) { 999 }
        it { expect(response).to have_http_status(404) }
      end

      context 'with owned dashboard' do 
        let(:did) { dashboard.id }

        context 'with unowned widget' do          
          let(:wid) { 999 }
          it { expect(response).to have_http_status(404) }
        end

        context 'with dashboard and widget' do
          let(:wid)  { dashboard.widgets.first.id }
          let(:schema)  { widget_schema }
          include_examples 'api_authorized_ok'
        end
      end
    end
  end

  describe '#update' do

    let(:widget)  { dashboard.widgets.first }

    context 'when unauthorised' do
      before { put :update, :params => { :dashboard_id => 999, :id => 42, :widget => {} } }
      include_examples 'api_unauthorized_examples'
    end

    context 'when authorised' do
      include_context 'api_authorisation'

      context 'with unowned dashboard' do
        before { put :update, :params => { :dashboard_id => 999, :id => 999, :widget => {} } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with unowned widget' do
        before { put :update, :params => { :dashboard_id => dashboard.id, :id => 999, :widget => {} } }
        it { expect(response).to have_http_status(404) }
      end

      context 'with invalid data' do
        let(:status)  { 400 }
        let(:schema)  { error_schema }

        before { put :update, :params => { :dashboard_id => dashboard.id, :id => widget.id, :name => '', :type => 'BLAH CHART' } }

        include_examples 'api_authorized_status_and_schema'
      end


      context 'with valid data' do

        let(:schema)      { widget_schema }

        before { put :update, :params => { :dashboard_id => dashboard.id, :id => widget.id, :name => 'Vtha', :type => 'BLAH CHART' } }

        it { expect(widget.reload.name).to eq 'Vtha' }
        it { expect(widget.reload.type).to eq 'bar' }
        include_examples 'api_authorized_ok'
      end
    end

  end

end
