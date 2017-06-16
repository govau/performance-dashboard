class DatasetDecorator < Draper::Decorator
  delegate_all

  def datapoints 
    context[:data_table].data_rows.collect do |row|
      row.decorate.pseudo_datapoint object
    end
  end

  def data_updated_at
    context[:data_table].data_updated_at
  end
end
