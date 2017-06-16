module Measurable
  extend ActiveSupport::Concern

  included do
    validates :units, :presence => true
    validates :units, inclusion: { in: %w(% $ n s i f),
        message: "%{value} is not a valid unit" }
  end

  def seconds?
    units == 's'
  end

  def number?
    units == 'n'
  end

  def fact?
    units == 'f'
  end

  def integer?
    units == 'i'
  end

  def money?
    units == '$'
  end

  def percentage?
    units == '%'
  end

  def prefix
    money? ? '$' : ''
  end

  def suffix
    (percentage? || seconds?) ? units : ''
  end

end
