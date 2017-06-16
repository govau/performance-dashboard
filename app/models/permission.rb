class Permission < ApplicationRecord
  belongs_to :user
  belongs_to :resource, polymorphic: true

  scope :on_dashboard, -> { where(resource_type: 'Dashboard' ) }
  scope :on_dataset, -> { where(resource_type: 'Dataset' ) }

  validates :user, uniqueness: { scope: [:resource_id, :resource_type] }
end
