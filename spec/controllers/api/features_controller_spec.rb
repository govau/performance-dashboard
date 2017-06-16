require 'rails_helper'

RSpec.describe Api::V1::FeaturesController, type: :controller do
  render_views

  describe '#index' do
    before do 
      request.accept = 'application/json'
      $flipper[:active_feature].enable
      $flipper[:inactive_feature].disable
      get :index
    end

    let(:expected_response) { { 'features' => ['active_feature'] } }

    specify { expect(JSON.parse(response.body)).to eq expected_response }
  end
end
