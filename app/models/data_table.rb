class DataTable < ApplicationRecord
  include Storext.model(options: {})
  audited
  has_associated_audits

  PERIODS = %w(custom free month week day)
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

  # Returns the FIRST collection month of all the data rows belonging to this table
  # Change by_time_desc to order first by collection month then by created date
  def series_start
    data_rows.by_time.first&.row_date
  end

  # Returns the LAST collection month of all the data rows belonging to this table
  # Change by_time to order first by collection month then by created date
  def series_end
    data_rows.by_time_desc.first&.row_date
  end

  # Extract the slices from the widget data
  #   returns an array of slices
  def slices(widget, limit: 0)
    arr = []
    period_start = series_end&.beginning_of_month

    
    if options['period'] == 'custom' 
      # Return a slice for each data row
      puts 'RUNNING SLICES METHOD IN DATA TABLE ++++++++++++++++++++++++++++++++++'

      data_rows.each do |row|
        period_end = calculate_period_end options['period'], period_start
        single_row = [row]
        groups = generate_groups single_row
        arr << Slice.new(widget, options['period'], period_start, period_end, groups, single_row, row.row_label)
      end
    else
      if period_start
        while (0 == limit || arr.size < limit) && period_start >= series_start&.beginning_of_month
          s = slice_data(widget, options['period'], period_start) # Returns a new slice

          if s
            arr << s
          end

          period_start = period_start << 1 # Move back one month
        end
      end
    end

    arr.reverse
  end

  def calculate_period_end(period, period_start)
    case period
      when 'week'
        period_start.advance(weeks: 1, days: -1)
      when 'month'
        period_start.advance(months: 1, days: -1)
      when 'year'
        period_start.advance(years: 1, days: -1)
      when 'century'
        period_start.advance(years: 100, days: -1)
      when 'custom'
        period_start.advance(months: 1, days: -1)
      else
        raise "Unknown period: #{period}"
    end
  end

  def slice_data(widget, period, period_start)
    period_end = calculate_period_end period, period_start

    rows = data_rows.within_interval(period_start, period_end).decorate(
      context: { widget: widget }
    )

    groups = generate_groups(rows)

    row_label = ''

    if groups.any?
      Slice.new widget, period, period_start, period_end, groups, rows, row_label
    end
  end

  def generate_groups(rows)
    values_by_set = {}

    rows.each do |row|
      row.values.each do |dataset_id, value|
        (values_by_set[dataset_id] ||= []) << value
      end
    end

    groups = values_by_set.collect {|dataset_id, values|
      [dataset_id, aggregate_slice_values(values)]
    }.to_h

    groups
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
