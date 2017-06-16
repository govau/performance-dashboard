class DataRowDecorator < Draper::Decorator
  delegate_all

  def pseudo_datapoint(dataset)
    PseudoDatapoint.new row_date, value_for(dataset)
  end

  def dashboard 
    data_table&.dashboard&.decorate
  end

  def pretty_values
    object.values.collect { |k, v|
      [Dataset.find_by(id: k).name || 'Unknown dataset', v]
    }.to_h
  end

  def relevant_widgets
    data_table.widgets.select do |widget|
      widget.datasets.collect(&:id).any? do |dataset_id|
        values.has_key? dataset_id
      end
    end
  end

  def values
    if context[:widget].present? 
      context[:widget].decorate.datasets.collect {|ds|
        [ds.id, value_for(ds)] # value_for(ds) might be nil, which is fine
      }.to_h
    else
      object.values 
    end
  end
end
