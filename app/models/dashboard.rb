class Dashboard < ApplicationRecord
  include Nameable
  audited
  has_associated_audits

  belongs_to :organisation
  has_many :widgets
  has_many :btl_widgets, -> { btl }, class_name: 'Widget'
  has_many :data_tables
  has_many :datasets, through: :data_tables
  has_many :permissions, as: :resource, dependent: :destroy
  has_many :users, through: :permissions

  accepts_nested_attributes_for :widgets

  validates :name, :description, :target_users, :presence => true
  validates :url, :url => true, :allow_nil => true

  serialize :notes, JSON

  def self.published
    where('published_at <= NOW()')
  end

  def published?
    published_at.present? && published_at <= Time.now
  end

  def self.available(password_param)
    if password_param && password_param.length <= 10 && password_param.match(/\A[a-zA-Z0-9]*\z/)
      return where("password = \'\' OR password = \'#{password_param}\'")
    end

    return where("password = \'\'")
  end

  def hero
    widgets.hero.first
  end

  def rows
    @rows ||= widgets.without_hero.by_row.by_pos.inject([]){ | a, w|
      a[w.row] = [] unless a[w.row]
      a[w.row] << w
      a
    }.compact
  end

  def first_row
    rows.first
  end

  def remaining_rows
    if widgets.kpis.any?
      rows.drop(1)
    else
      rows
    end
  end

  def to_param
    @slug ||= "#{id}-#{name.parameterize}"
  end

  def last_updated_at
    widgets.by_last_updated&.last&.last_updated_at
  end
end
