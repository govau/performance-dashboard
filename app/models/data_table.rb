class DataTable < ApplicationRecord
  include Storext.model(options: {})
  audited
  has_associated_audits

  PERIODS = %w(free month week day)
  SLICE_AGGREGATIONS = %w(mean sum)

  store_attributes :options do 
    slice_aggregation String, default: 'mean'
    period String, default: 'month'
  end

  belongs_to :dashboard
  has_many :widgets
  has_many :data_table_datasets, dependent: :destroy
  has_many :datasets, through: :data_table_datasets
  has_many :data_rows, dependent: :destroy

  validates :period, inclusion: { in: PERIODS, allow_nil: true } 
  validates :slice_aggregation, inclusion: { in: SLICE_AGGREGATIONS, allow_nil: true } 

  def data_updated_at
    data_rows.latest_updated.first&.updated_at
  end

  def has_data?
    data_rows.any?
  end

  def lacks_data?
    !has_data?
  end

  def data_updated_at
    data_rows.latest_updated.first&.updated_at
  end

  def series_start
    data_rows.by_time.first&.row_date
  end

  def series_end
    data_rows.by_time_desc.first&.row_date
  end

  def slices(widget, limit: 0)
    arr = []

    if period_start = series_end&.beginning_of_month
      while (0 == limit || arr.size < limit) &&
          s = slice_data(widget, 'month', period_start)
        arr << s
        period_start = period_start << 1
      end
    end

    arr.reverse
  end

  def slice_data(widget, period, period_start)
    period_end = case period
    when 'week'
      period_start.advance(weeks: 1, days: -1)
    when 'month'
      period_start.advance(months: 1, days: -1)
    when 'year'
      period_start.advance(years: 1, days: -1)
    when 'century'
      period_start.advance(years: 100, days: -1)
    else
      raise "Unknown period: #{period}"
    end

    values_by_set = {}
    rows = data_rows.within_interval(period_start, period_end).decorate(
      context: { widget: widget })

    rows.each do |row|
      row.values.each do |dataset_id, value| 
        (values_by_set[dataset_id] ||= []) << value
      end
    end

    groups = values_by_set.collect {|dataset_id, values|
      [dataset_id, aggregate_slice_values(values)]
    }.to_h

    if groups.any? 
      Slice.new widget, period, period_start, period_end, groups, rows
    end
  end

  def aggregate_slice_values(values)
    values.reject! &:blank?
    return nil unless values.present? 

    case slice_aggregation
    when 'sum'
      values.sum
    when 'mean' 
      values.sum / values.size       
    else 
      raise "Unknown aggregation method: #{slice_aggregation}"
    end
  end
end
