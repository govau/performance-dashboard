# TODO Removal of redundant tables to be done at a later date:
#   DatasetWidget, Datapoint
# And attributes:
#   Dataset#period

class PopulateDataTables < ActiveRecord::Migration[5.0]

  # Migration-local models with both old and new relationships

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled

    belongs_to :data_table
    has_many :dataset_widgets
    has_many :datasets, through: :dataset_widgets
    has_many :datapoints, through: :datasets
    has_many :data_table_datasets
    has_many :data_tables, through: :data_table_datasets
  end

  class DatasetWidget < ActiveRecord::Base
    belongs_to :widget
    belongs_to :dataset
  end

  class Dataset < ActiveRecord::Base
    has_many :datapoints
    has_many :dataset_widgets
    has_many :widgets, through: :dataset_widgets
    has_many :data_table_datasets
    has_many :data_tables, through: :data_table_datasets
  end

  class Datapoint < ActiveRecord::Base
    belongs_to :dataset
  end

  class DataTable < ActiveRecord::Base
    include Storext.model(options: {})
    
    belongs_to :dashboard
    has_one :widget
    has_many :data_table_datasets
    has_many :datasets, through: :data_table_datasets
    has_many :data_rows
  end

  class DataTableDataset < ActiveRecord::Base
    belongs_to :data_table
    belongs_to :dataset
  end

  class DataRow < ActiveRecord::Base
    include Storext.model

    belongs_to :data_table

    store_attributes :data do 
      values Hash[Integer => Float]
    end
  end

  class Audit < ActiveRecord::Base 
  end

  # Populate new tables

  def up
    Widget.where.not(type: 'fact').select {|widget|
      widget.datasets.any? 
    }.sort {|a, b|
      b.datasets.count <=> a.datasets.count 
    }.each {|widget|
      data_table = widget.datasets.first.data_tables.first
      
      # Only populate if this is the first widget found with data
      if data_table.nil?
        data_table = DataTable.create! name: widget.name,
          dashboard_id: widget.dashboard_id

        widget.datasets.each do |dataset|
          data_table.datasets << dataset
        end

        groups = {}

        widget.datapoints.order(ts: 'ASC').each do |datapoint| 
          date = datapoint.ts.to_date
          groups[date] ||= {}
          groups[date][datapoint.dataset_id] = datapoint.value
        end

        groups.each do |date, hash|
          data_table.data_rows.create! row_date: date, values: hash
        end
      end

      widget.update_attributes! data_table: data_table
    }

    # Get rid of legacy audits
    Audit.where(auditable_type: 'Datapoint').delete_all
  end

  # Clear out new tables of all data & remove references 

  def down
    Widget.update_all data_table_id: nil

    [DataTableDataset, DataRow, DataTable].each do |clazz|
      clazz.delete_all
    end
  end 
end
