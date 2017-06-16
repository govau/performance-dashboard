class AddOrderNumToDatasetWidgets < ActiveRecord::Migration[5.0]
  KPIS = ['User satisfaction', 'Cost per transaction', 'Digital take-up', 'Completion rate']

  class Dataset < ActiveRecord::Base
    has_many :dataset_widgets
    has_many :widgets, through: :dataset_widgets
  end

  class DatasetWidget < ActiveRecord::Base
    belongs_to :dataset
    belongs_to :widget
  end

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled
    has_many :dataset_widgets
    has_many :datasets, through: :dataset_widgets
  end

  def up
    add_column :dataset_widgets, :order_num, :integer, null: false, default: 0

    DatasetWidget.all.each do |dw|
      if dw&.widget&.is_hero && dw.dataset.present?
        if KPIS.include? dw.dataset.name 
          order_num = KPIS.find_index dw.dataset.name
          puts "Updating dataset_widget #{dw.id} (#{dw.dataset.name}) order num to #{order_num}"
          dw.update_attribute :order_num, order_num
        else
          puts "Could not find suitable order num for dataset_widget #{dw.id} (#{dw.dataset.name})"
        end
      end
    end
  end

  def down
    remove_column :dataset_widgets, :order_num
  end
end
