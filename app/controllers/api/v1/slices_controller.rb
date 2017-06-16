class Api::V1::SlicesController < Api::V1::ApiController

  before_action :find_widget, :parse_period_start

  def show
    @slice = get_slice

    unless @slice.present? 
      render_not_found 'No data for the given period'
    end
  end

  def create
    if get_slice.present? 
      render json: {
        code: '422',
        message: 'Data already exists for the given period'
      }, status: :unprocessable_entity
    else
      generate_datapoints 
      @widget.update last_updated_at: DateTime.now
      @slice = get_slice
    end
  end

  def update 
    ActiveRecord::Base.transaction do
      get_slice.data_rows.each {|row| row.destroy }
      generate_datapoints
      @widget.update last_updated_at: DateTime.now
    end

    @slice = get_slice
  end

  private

  def get_slice
    @widget.data_table.slice_data @widget, params[:period], @period_start
  end

  def generate_datapoints
    row = @widget.data_table.data_rows.build row_date: @period_start    

    params[:groups].each do |hash|
      row.set_value_for hash[:dataset_id], hash[:value]
    end

    row.save!
  end

  def find_widget
    begin
      @widget = current_user.widgets.find(params[:widget_id])
    rescue ActiveRecord::RecordNotFound
      render_not_found 'No such widget for current user'
    end
  end

  def parse_period_start
    @period_start = DateTime.parse params[:period_start]
  end
end



