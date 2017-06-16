class AddDatasetsPeriod < ActiveRecord::Migration[5.0]

  def change
    add_column :datasets, :period, :string, null: false, default: 'month'
  end
end
