class AddOptionsToDatasets < ActiveRecord::Migration[5.0]
  class Dataset < ActiveRecord::Base  
    include Storext.model(options: {})

    COLORS = [0x4892C0, 0x75A370, 0xF5D900, 0x7066A5, 0xF8BBD0, 0x47BCAC,
      0x5345AD, 0xAFA545, 0xCB6935]

    KPI_COLORS = {
      'User satisfaction'     => 0xf2b038,
      'Cost per transaction'  => 0x75a370,
      'Digital take-up'       => 0x4892c0,
      'Completion rate'       => 0x7066a5
    }

    has_many :dataset_widgets
    has_many :widgets, through: :dataset_widgets

    store_attributes :options do 
      color Integer
    end
  end

  class DatasetWidget < ActiveRecord::Base
    belongs_to :widget
    belongs_to :dataset
  end

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled

    scope :without_hero, -> { where.not(is_hero: true) } 

    has_many :dataset_widgets
    has_many :datasets, through: :dataset_widgets

    def kpi?
      Dataset::KPI_COLORS.has_key? name
    end
  end

  def up
    add_column :datasets, :options, :jsonb, null: false, default: {}
  end

  def down
    remove_column :datasets, :options
  end
end
