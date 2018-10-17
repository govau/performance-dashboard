class Api::V1::DashboardsController < Api::V1::ApiController
  attr_reader :dashboard

  before_action :find_dashboard, :only => [:show, :update]

  def index
    dashboards = current_user.dashboards.by_name.all
    render :json => dashboards.to_json
  end

  def create
    dashboard = Dashboard.new dashboard_params
    dashboard.published_at = Time.now
    dashboard.save!

    render :json => dashboard.to_json
  end

  # Creates a dashboard with 4 KPI widgets, datasets
  def create_full
    dashboard = Dashboard.new dashboard_params
    dashboard.notes = params[:notes].as_json
    dashboard.published_at = Time.now
    dashboard.save!

    data_table = DataTable.create({
      :dashboard_id => dashboard.id,
      :options => {
        :period => 'month',
        :slice_aggregation => 'mean'
      }
    })

    widget0 = Widget.create({
      :dashboard_id => dashboard.id,
      :data_table_id => data_table.id,
      :name => 'Kpis',
      :options => {},
      :description => 'Descrip',
      :row => 0,
      :pos => 0,
      :type => 'full',
      :size => 'extra-large',
      :units => 'n',
      :is_hero => true
    })

    widget1 = Widget.create({
      :dashboard_id => dashboard.id,
      :data_table_id => data_table.id,
      :name => 'User satisfaction',
      :options => {},
      :description => 'Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied',
      :row => 1,
      :pos => 0,
      :type => 'kpi-sparkline',
      :size => 'extra-small',
      :units => '%'
    })

    widget2 = Widget.create({
      :dashboard_id => dashboard.id,
      :data_table_id => data_table.id,
      :name => 'Cost per transaction',
      :options => {},
      :description => 'Desc',
      :row => 1,
      :pos => 1,
      :type => 'kpi-sparkline',
      :size => 'extra-small',
      :units => '$'
    })

    widget3 = Widget.create({
      :dashboard_id => dashboard.id,
      :data_table_id => data_table.id,
      :name => 'Digital take-up',
      :options => {},
      :description => 'Desc',
      :row => 1,
      :pos => 2,
      :type => 'kpi-sparkline',
      :size => 'extra-small',
      :units => '%'
    })

    widget4 = Widget.create({
      :dashboard_id => dashboard.id,
      :data_table_id => data_table.id,
      :name => 'Completion rate',
      :options => {},
      :description => 'Desc',
      :row => 1,
      :pos => 3,
      :type => 'kpi-sparkline',
      :size => 'extra-small',
      :units => '%'
    })

    dataset1 = Dataset.create({
      :name => 'User satisfaction',
      :label => 'User satisfaction',
      :units => '%',
      :notes => 'User satisfaction measures the percentage of users who responded "satisfied" or "very satisfied" in our feedback survey. This figure is not yet statistically significant because of the low number of feedback responses from August 2016 onwards. In addition, we have no data for the months of May, June and July 2016 because no users provided feedback. We are determining the best way to encourage more feedback from our users.',
      :period => 'month',
      :options => {}
    })

    dataset2 = Dataset.create({
      :name => 'Cost per transaction',
      :label => 'Cost per transaction',
      :units => '$',
      :notes => 'This data is currently unavailable due to....',
      :period => 'month',
      :options => {}
    })

    dataset3 = Dataset.create({
      :name => 'Digital take-up',
      :label => 'Digital take-up',
      :units => '%',
      :notes => 'The percentage of visitors to the business.gov.au',
      :period => 'month',
      :options => {}
    })

    dataset4 = Dataset.create({
      :name => 'Completion rate',
      :label => 'Completion rate',
      :units => '%',
      :notes => 'The percentage of users who successfully generate a result after starting the tool. This is calculated by dividing the total number of successfully completed transactions by the total number of started transactions.',
      :period => 'month',
      :options => {}
    })

    DataTableDataset.create({
      :dataset_id => dataset1.id,
      :data_table_id => data_table.id
    })

    DataTableDataset.create({
      :dataset_id => dataset2.id,
      :data_table_id => data_table.id
    })

    DataTableDataset.create({
      :dataset_id => dataset3.id,
      :data_table_id => data_table.id
    })

    DataTableDataset.create({
      :dataset_id => dataset4.id,
      :data_table_id => data_table.id
    })

    DatasetWidget.create({
      :dataset_id => dataset1.id,
      :widget_id => widget1.id,
      :order_num => 0
    })

    DatasetWidget.create({
      :dataset_id => dataset2.id,
      :widget_id => widget2.id,
      :order_num => 1
    })

    DatasetWidget.create({
      :dataset_id => dataset3.id,
      :widget_id => widget3.id,
      :order_num => 2
    })

    DatasetWidget.create({
      :dataset_id => dataset4.id,
      :widget_id => widget4.id,
      :order_num => 3
    })

    DatasetWidget.create({
      :dataset_id => dataset1.id,
      :widget_id => widget0.id,
      :order_num => 0
    })

    DatasetWidget.create({
      :dataset_id => dataset2.id,
      :widget_id => widget0.id,
      :order_num => 1
    })

    DatasetWidget.create({
      :dataset_id => dataset3.id,
      :widget_id => widget0.id,
      :order_num => 2
    })

    DatasetWidget.create({
      :dataset_id => dataset4.id,
      :widget_id => widget0.id,
      :order_num => 3
    })

    DataRow.create({
      :data_table_id => data_table.id,
      :row_date => "#{params[:periodYear]}-#{params[:periodMonth]}-01",
      :data => {
        :values => {
          dataset1.id => params[:userSatisfaction].empty? ? nil : params[:userSatisfaction],
          dataset2.id => params[:costPerTransaction].empty? ? nil : params[:costPerTransaction],
          dataset3.id => params[:digitalTakeup].empty? ? nil : params[:digitalTakeup],
          dataset4.id => params[:completionRate].empty? ? nil : params[:completionRate]
        }
      }
    })

    Permission.create({
      :resource_type => 'Dashboard',
      :resource_id => dashboard.id,
      :user_id => current_user.id
    })

    render :json => dashboard.to_json
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

  def dashboard_params
    params.permit(:name, :description, :target_users, :organisation_id, :url, :notes, :published_at)
  end
end
