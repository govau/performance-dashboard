class Api::V1::Public::DashboardsController < ActionController::Base
  include Sslify

  def index
    render json: Dashboard.published
  end

  def show
    render json: Dashboard.published.find(params[:id])
  end
end
