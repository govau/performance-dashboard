class WidgetDecorator < Draper::Decorator
  decorates_association :data_table
  delegate_all

  def units_to_s
    if money? || percentage?
      units
    elsif seconds?
      'Seconds'
    else
      'Numeric'
    end
  end

  def style
    arity = multiple? ? 'multiple' : 'single'
    "#{type} #{arity}"
  end

  def show_description?
    description.present?
  end

  def summary    
    num_rows = data_table&.data_rows&.count || 0
    
    if num_rows > 1 && datasets.count == 1 # Only for sparklines
      date = data_table.previous.row_date.to_formatted_s :month_year

      if data_table.trending?
        "#{data_table.trend.capitalize} by #{format(data_table.difference)} since #{date}"
      else
        "#{data_table.trend.capitalize} since #{date}"
      end
    else
      ''
    end
  end

  def last_updated_at
    object.last_updated_at.to_formatted_s(:day_month_year).strip
  end

  def name_slug
    name.downcase.parameterize()
  end

  # create a class level hash to store the size to style mapping data for a faster lookup than case-when statement
  SIZE_TO_STYLE = {
    'extra-small' => 'col-xs-12 col-lg-3',
    'small' => 'col-xs-12 col-lg-4',
    'medium' => 'col-xs-12 col-lg-6',
    'large' => 'col-xs-12 col-lg-8',
    'extra-large' => 'col-xs-12'
  }

  def size_to_style
    SIZE_TO_STYLE[size] || 'col-xs-12 col-xs-6'
  end

  # Legacy sugar
  def latest_datapoint
    if data_table.present?
      dataset = datasets.first 
      row = data_table.data_rows.by_time.last
      row.decorate.pseudo_datapoint dataset if row.present? 
    end
  end

  def datasets
    object.datasets.collect do |dataset| 
      dataset.decorate(context: { data_table: data_table })
    end
  end

  private 

  def format(change)
    dataset = datasets.first

    case
    when dataset.percentage?
      helpers.number_to_percentage(change.abs, :precision => 2)
    when dataset.money?
      helpers.number_to_currency(change.abs)
    when dataset.integer?
      change.abs.to_i
    else
      change.abs
    end
  end
end
