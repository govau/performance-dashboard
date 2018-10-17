class Api::V1::WidgetsController < Api::V1::ApiController
  before_action :find_dashboard
  before_action :find_widget, :only => [:show, :update]

  attr_reader :dashboard, :widget

  def index
    @widgets = dashboard.widgets.by_name
  end

  def show
  end

  def create
    widget = Widget.create({
      :dashboard_id => @dashboard.id,
      :name => params[:name],
      :options => params[:options],
      :description => params[:description],
      :row => params[:row],
      :pos => params[:pos],
      :type => params[:type],
      :size => params[:size],
      :units => params[:units],
    })

    render :json => widget.to_json
  end

  # Create a widget with datasets
  def create_full
    data_table = DataTable.create({
      :dashboard_id => @dashboard.id,
      :options => {
        :period => 'month',
        :slice_aggregation => 'mean'
      }
    })

    widget = Widget.create({
      :dashboard_id => @dashboard.id,
      :data_table_id => data_table.id,
      :name => params[:name],
      :options => {},
      :description => params[:description],
      :row => 0,
      :pos => 0,
      :type => 'bar',
      :size => 'medium',
      :units => 'n',
    })

    values = {}

    params[:datasets].each do |d|
      dataset = Dataset.create({
        :name => d['name'],
        :label => d['label'],
        :units => d['units'],
        :notes => d['notes'],
        :period => 'month',
        :options => {}
      })

      DataTableDataset.create({
        :dataset_id => dataset.id,
        :data_table_id => data_table.id
      })

      DatasetWidget.create({
        :dataset_id => dataset.id,
        :widget_id => widget.id,
        :order_num => 0
      })

      values[dataset.id] = d['value']
    end

    DataRow.create({
      :data_table_id => data_table.id,
      :row_date => params[:period],
      :data => {
        :values => values
      }
    })

    render :json => widget.to_json
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
