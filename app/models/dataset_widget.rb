class DatasetWidget < ApplicationRecord
  belongs_to :dataset
  belongs_to :widget

  validates_presence_of :dataset, :widget
  validate :dataset_must_belong_to_widget_data_table

  before_create :calculate_order_num

  private 

  def dataset_must_belong_to_widget_data_table
    unless widget.data_table.datasets.include? dataset
      errors.add :dataset, 'Dataset not present in widget\'s data table'
    end
  end

  def calculate_order_num
    self.order_num = widget.datasets.count
  end
end
