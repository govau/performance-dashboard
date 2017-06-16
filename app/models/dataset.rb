class Dataset < ApplicationRecord
  include Measurable
  include Nameable
  include CreationOrderable
  include Storext.model(options: {})
  audited

  COLORS = [0x4892C0, 0x75A370, 0xF5D900, 0x7066A5, 0xF8BBD0, 0x47BCAC,
    0x5345AD, 0xAFA545, 0xCB6935]

  KPI_COLORS = {
    'User satisfaction'     => 0xf2b038,
    'Cost per transaction'  => 0x75a370,
    'Digital take-up'       => 0x4892c0,
    'Completion rate'       => 0x7066a5
  }

  has_many :permissions, as: :resource, dependent: :destroy
  has_many :users, through: :permissions

  has_many :data_table_datasets, dependent: :destroy
  has_many :data_tables, through: :data_table_datasets
  has_many :dataset_widgets, dependent: :destroy
  has_many :widgets, through: :dataset_widgets

  store_attributes :options do 
    color Integer
  end

  before_validation :set_units
  before_validation :set_label

  validates :name, :label, :units, :presence => true  

  def kpi?
    KPI_COLORS.keys.include? name
  end

  def set_units
    self.units = 'n' if self.units.blank?
  end

  def set_label
    self.label = 'n' if self.label.blank?
  end

  # def set_color
  #   unless color.present? 
  #     if widgets.any?
  #       if widgets.kpis.any? 
  #         self.color = KPI_COLORS[widgets.kpis.first.name]
  #       else
  #         self.color = COLORS.find do |color|
  #           !widgets.collect {|widget|
  #             widget.datasets.collect &:color
  #           }.flatten.include? color
  #         end
  #       end
  #     end
  #   end
  # end

  def color_string
    relevant_color = color.presence || if kpi? then KPI_COLORS[name] end

    if relevant_color.present?
      "##{'%06X' % relevant_color}"
    end
  end

  def color_string=(val)
    self.color = Integer val.gsub /^#/, '0x' rescue nil
  end
end
