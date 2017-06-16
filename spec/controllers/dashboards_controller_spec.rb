require "rails_helper"

RSpec.describe DashboardsController, :type => :controller do
  describe "GET index page" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
      expect(response).to render_template(:index)
    end

    describe 'shows only published dashboards' do 
      let(:published) { FactoryGirl.create(:dashboard_published) }
      let(:unpublished) { FactoryGirl.create(:dashboard) }

      before { get :index }

      specify { expect(assigns(:dashboards)).to include published }
      specify { expect(assigns(:dashboards)).not_to include unpublished }
    end
  end

  describe "GET show page with a valid dashboard id" do
    let(:dashboard)    { FactoryGirl.create(:dashboard_published) }
    it "responds successfully with an HTTP 200 status code" do
      get :show, params: {id: dashboard.id}
      expect(response).to be_success
      expect(response).to have_http_status(200)
      expect(response).to render_template(:show)
    end
  end

  describe "GET show page with the ID of an unpublished dashboard" do
    let(:dashboard)    { FactoryGirl.create(:dashboard) }

    it "should catch an exception" do
      expect {
        get :show, params: {id: dashboard.id}
      }.to raise_error ActiveRecord::RecordNotFound
    end
  end

  describe "GET show page with an invalid dashboard id" do
    it "should catch an exception" do
      expect {
        get :show, params: {id: 10000}
      }.to raise_error ActiveRecord::RecordNotFound
    end
  end

  describe "Export the csv data" do
    context "with a valid dashboard id" do
      let(:dashboard) { FactoryGirl.create(:dashboard_with_widgets, :published) }
      it "responds successfully with an HTTP 200 status code" do
        get :export, params: {id: dashboard.id, format: 'csv' }
        expect(response).to be_success
      end
    end
  end
end
