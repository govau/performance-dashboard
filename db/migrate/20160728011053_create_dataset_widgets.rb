class CreateDatasetWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :dataset_widgets do |t|
      t.references :dataset, :null => false, :index => true
      t.references :widget, :null => false, :index => true
      t.timestamps
    end
  end
end
