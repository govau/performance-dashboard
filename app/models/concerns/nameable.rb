module Nameable
  extend ActiveSupport::Concern

  included do
    validates :name, :presence => true
    scope :by_name, -> { order(:name => 'ASC') }
  end

  def to_s
    name
  end

end
