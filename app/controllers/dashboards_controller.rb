class DashboardsController < ApplicationController
  caches_page :show, :index

  attr_reader :dashboards, :dashboard, :widgets
  helper_method :dashboards, :dashboard

  def index
    @dashboards = Dashboard.available(params[:password]).published.by_name.all.decorate
  end

  def show
    @dashboard = Dashboard.available(params[:password]).published.find(params[:id]).decorate
    @title = @dashboard.name
    @description = @dashboard.name

    @slices = @dashboard.widgets.select {|widget|
      widget.has_data?
    }.collect {|widget|
      # widget.data_table.decorate.slices(widget, limit: 13)
      widget.data_table.slices(widget, limit: 13) # Jon todo: decorator necessary?
    }.flatten

    return @slices
  end

  def export
    @dashboard = Dashboard.published.find(params[:id])
    @filename = "#{@dashboard.name} dashboard.csv"
  end
end
