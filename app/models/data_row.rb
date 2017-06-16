class DataRow < ApplicationRecord
  include Storext.model(data: {})
  audited associated_with: :data_table

  scope :within_interval, -> (interval_start, interval_end) {
    where('row_date >= ? AND row_date <= ?', interval_start, interval_end)
  }

  scope :by_time, -> { order(row_date:  'ASC') }
  scope :by_time_desc, -> { order(row_date: 'DESC') }
  scope :latest_updated, -> { order(updated_at: 'DESC') }

  belongs_to :data_table

  store_attributes :data do 
    values Hash[Integer => Float]
  end

  validates :row_date, :data_table, presence: true
  validate :check_frequency, :check_values_numericality

  def value_for(dataset_obj_or_id)
    values[resolve_dataset dataset_obj_or_id]
  end

  def set_value_for(dataset_obj_or_id, value)
    tmp = values || {}
    tmp[resolve_dataset dataset_obj_or_id] = value.presence
    self.values = tmp
  end

  private 

  def resolve_dataset(dataset_obj_or_id)
    if dataset_obj_or_id.respond_to? :id
      dataset_obj_or_id.id
    else
      dataset_obj_or_id
    end
  end

  def check_frequency
    if data_table&.period.present?
      case data_table.period
      when 'month'
        query = data_table.data_rows.within_interval(
          row_date.beginning_of_month, row_date.end_of_month)

        query = query.where.not(id: id) if persisted?

        if query.count > 0
          errors.add :row_date, 'This month already has a data row'
        end
      end
    end
  end

  def check_values_numericality
    if values.present?
      values.each do |k, v|
        if v.present? 
          unless v.is_a? Numeric
            errors.add :values, "Value #{v} (dataset ID: #{k}) is neither null nor numeric"
          end
        end
      end
    end
  end
end
