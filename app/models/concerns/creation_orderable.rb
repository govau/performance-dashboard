module CreationOrderable
  extend ActiveSupport::Concern

  included do
    scope :by_created, -> { order created_at: :asc }
  end
end
