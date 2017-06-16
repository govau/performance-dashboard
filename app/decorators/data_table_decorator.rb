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
end