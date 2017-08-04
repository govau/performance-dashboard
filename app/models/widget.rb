class Widget < ApplicationRecord
  include Nameable
  include Measurable
  include CreationOrderable
  audited associated_with: :dashboard

  KPIS = ['User satisfaction', 'Cost per transaction', 'Digital take-up', 'Completion rate']
  SIZES = %w(extra-small small medium large extra-large)
  TYPES = %w(bar fact full kpi-sparkline line pie sparkline)

  self.inheritance_column = :_type_disabled

  scope :hero, -> { where(is_hero: true) }
  scope :without_hero, -> { where.not(is_hero: true) } # is this clumsy wording for nulls?
  scope :kpis, -> { where(name: KPIS) }
  scope :btl, -> { where.not(name: KPIS).where(is_hero: false) }
  scope :by_row, -> { order(row: 'ASC') }
  scope :by_pos, -> { order(pos: 'ASC') }
  scope :by_last_updated, -> { order(last_updated_at: 'ASC') }

  serialize :options, JSON

  belongs_to :dashboard
  belongs_to :data_table
  has_many :dataset_widgets, -> { order(:order_num) }
  has_many :datasets, through: :dataset_widgets

  delegate :data_updated_at, :series_end, :series_start, to: :data_table,
    allow_nil: true

  before_create :set_defaults

  def self.last_updated
    by_last_updated.last
  end

  validates :size, :type, presence: true
  validates :size, inclusion: { in: SIZES, message: "%{value} is not a valid size" }
  validates :type, inclusion: { in: TYPES, message: "%{value} is not a valid chart type" }
  validates :pos, presence: true, numericality: { only_integer: true }

  def multiple?
    datasets&.many?
  end
  
  def has_data?
    data_table.present? && data_table.has_data?
  end

  def has_current_data? 
    has_data? && datasets.any? do |dataset|
      data_table.data_rows.by_time.last.value_for(dataset).present?
    end
  end
  
  def lacks_data?
    !has_data?
  end

  def to_s
    name
  end

  private

  def set_defaults
    self.options = {} unless options
    self.row ||= 0
    self.last_updated_at ||= DateTime.now
  end
end
