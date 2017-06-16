# Syntactic sugar to interface with legacy code
class PseudoDatapoint
  attr_reader :ts, :label, :id

  def initialize(ts, raw_value)
    @ts = ts
    @raw_value = raw_value
    generate_id
  end

  def label
    @ts.strftime("%Y-%m")
  end

  # This is a fugly implementation of an overriden method, emulating:
  #   Datapoint#value
  # and
  #   DatapointDecorator#value(prefix, suffix)
  def value(prefix = nil, suffix = nil)
    if prefix.present? && suffix.present? 
      if @raw_value.present? 
        "#{prefix}#{@raw_value}#{suffix}"
      else
        'no data'
      end
    else
      @raw_value
    end
  end

  private 

  def generate_id
    @@increment ||= 0
    @@increment = @@increment + 1
    @id = @@increment
  end
end
