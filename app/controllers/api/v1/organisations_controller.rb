class Api::V1::OrganisationsController < Api::V1::ApiController
  attr_reader :organisation

  def index
    render :json => Organisation.all.to_json
  end
end
