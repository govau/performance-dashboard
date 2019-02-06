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
  # Returns an array of slices
  # Jon todo: Cater for custom slices
  # We should have a different slices method for custom datasets
  def slices(widget, limit: 0) 
    # puts 'def slices'
    # puts 'Widget'
    # puts widget.id
    # puts options['period']
    # puts '---'

    arr = []
    period_start = series_end&.beginning_of_month

    # puts '---------------------'

    # puts 'Period start'
    # puts period_start

    # puts 'period_start << 1'
    # puts period_start << 1

    # puts 'series_start&.beginning_of_month'
    # puts series_start&.beginning_of_month

    # puts 'options period'
    # puts options['period']

    # Return a slice for each data row
    if options['period'] == 'custom'
      data_rows.each do |row|
        period_end = calculate_period_end options['period'], period_start
        single_row = [row]
        groups = generate_groups single_row
        arr << Slice.new(widget, options['period'], period_start, period_end, groups, single_row, row.row_label)
      end      
    else
      if period_start
        while (0 == limit || arr.size < limit) && period_start >= series_start&.beginning_of_month
          puts 'Widget'
          puts widget.to_yaml

          # puts 'rl'
          # puts row_label
      
          # if s = slice_data(widget, 'month', period_start)

          s = slice_data(widget, options['period'], period_start) # Returns a new slice

          # puts 'considering slice---------------------'
          # puts widget.id
          # puts s.to_yaml

          if s
            arr << s          
          else
            # puts 'NOT ADDING---------------'
            # puts s.to_yaml
          end

          period_start = period_start << 1 # Move back one month
        end
      end
    end

    puts arr.to_yaml
    puts '-----------------------+++-----------------'

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
    
    if rows[0] && rows[0].row_label
      puts rows[0].row_label
      puts 'FOUND ------------------------------'
    end
    
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

    # puts values_by_set.first.to_yaml
    # puts '---'

    groups = values_by_set.collect {|dataset_id, values|
      [dataset_id, aggregate_slice_values(values)]
    }.to_h

    # puts groups.first.class
    # puts groups.first.size
    # puts groups.first
    # puts '+++'
    # puts ''

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
