class Api::V1::DatasetsController < Api::V1::ApiController

  before_action :find_dataset, :only => [:show, :update]

  attr_reader :dataset

  def index
    render json: current_user.datasets.to_json
  end

  def show
    render json: dataset.to_json
  end

  def update
    with_invalid_record_handler do
      dataset.update_attributes!(data)
      invalidate_dashboards(*dashboards_for_dataset(dataset))
      render :json => dataset.to_json, :status => :ok
    end
  end

  private

  def find_dataset
    @dataset = current_user.datasets.find {|ds| ds.id == params[:id].to_i }
    head :not_found unless @dataset.present? 
  end

  def data
    params.permit(:name, :label, :units)
  end
end
