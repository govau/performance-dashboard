# A slice is a month by default
# If there are 2 records for a month, they are aggregated to return one slice

class Slice 
  attr_reader :widget, :period, :period_start, :period_end, :groups, :data_rows, :row_label

  def initialize(widget, period, period_start, period_end, groups, data_rows=nil, row_label=nil)
    @widget = widget
    @period = period
    @period_start = period_start
    @period_end = period_end
    @row_label = row_label
    @groups = groups
    @data_rows = data_rows
  end
end
