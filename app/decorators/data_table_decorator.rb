class DataTableDecorator < Draper::Decorator
  delegate_all

  def summary    
    if data_rows.count > 1 && datasets.count == 1 # Only for sparklines
      date = previous.row_date.to_formatted_s :month_year

      if trending?
        "#{trend.capitalize} by #{format(difference)} since #{date}"
      else
        "#{trend.capitalize} since #{date}"
      end
    end
  end

  #TODO find a way of DRYing this up, copy-pasted just to use 
  def slices(widget, limit: 0)
    arr = []

    if period_start = series_end&.beginning_of_month
      while (0 == limit || arr.size < limit) &&
          period_start >= series_start&.beginning_of_month
        if s = slice_data(widget, 'month', period_start)
          arr << s          
        end

        period_start = period_start << 1
      end
    end

    arr.reverse
  end

  def slice_data(widget, period, period_start)
    object.slice_data(widget, period, period_start) ||
      fake_slice(widget, period, period_start)
  end

  def latest
    data_rows.by_time_desc.first
  end

  def previous
    data_rows.by_time_desc.second
  end

  def up?
    difference > 0
  end

  def down?
    !up?
  end

  def trending?
    difference != 0
  end

  def difference
    row_first_value(latest) - row_first_value(previous)
  end

  def trend
    if trending? 
      if up? 
        'up'
      else
        'down'
      end
    else
      'unchanged'
    end
  end

  private 

  def row_first_value(row)
    row.values&.first&.second&.to_f || 0
  end

  def fake_slice(widget, period, period_start)
    period_end = calculate_period_end period, period_start

    row = DataRow.new do |dr|
      dr.data_table = object
      dr.row_date = period_start
      dr.values = {}
    end

    rows = [row.decorate(context: {widget: widget})]

    groups = generate_groups rows

    Slice.new widget, period, period_start, period_end, groups, rows
  end
end