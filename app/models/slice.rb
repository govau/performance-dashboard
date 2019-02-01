class Slice 
  attr_reader :widget, :period, :period_start, :period_end, :groups, :data_rows

  def initialize(widget, period, period_start, period_end, groups, data_rows=nil)
    @widget = widget
    @period = period
    @period_start = period_start
    @period_end = period_end
    # @row_label = row_label
    @groups = groups
    @data_rows = data_rows
  end
end
