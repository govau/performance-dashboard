class Api::V1::WidgetsController < Api::V1::ApiController

  before_action :find_dashboard
  before_action :find_widget, :only => [:show, :update]

  attr_reader :dashboard, :widget

  def index
    @widgets = dashboard.widgets.by_name
  end

  def show
  end

  def update
    with_invalid_record_handler do
      widget.update_attributes!(data)
      invalidate_dashboards widget.dashboard
      render :json => widget.to_json, :status => :ok
    end
  end

  private

  def find_dashboard
    begin
      @dashboard = current_user.dashboards.find(params[:dashboard_id])
    rescue ActiveRecord::RecordNotFound
      head :not_found
    end
  end

  def find_widget
    begin
      @widget = dashboard.widgets.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      head :not_found
    end
  end

  def data
    params.permit(:name, :description, :units, :last_updated_at)
  end

end
