class Api::V1::DashboardsController < Api::V1::ApiController
  attr_reader :dashboard

  before_action :find_dashboard, :only => [:show, :update]

  def index
    dashboards = current_user.dashboards.by_name.all
    render :json => dashboards.to_json
  end

  def show
    render :json => dashboard.to_json
  end

  def update
    with_invalid_record_handler do
      invalidate_dashboards dashboard 
      dashboard.update_attributes!(data)
      render :json => dashboard.to_json, :status => :ok
    end
  end

  private

  def find_dashboard
    begin
      @dashboard = current_user.dashboards.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      head :not_found
    end
  end

  def data
    params.permit(:name, :description, :target_users, :notes, :url, :published_at)
  end

end
