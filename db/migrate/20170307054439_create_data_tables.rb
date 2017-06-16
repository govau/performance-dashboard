class CreateDataTables < ActiveRecord::Migration[5.0]
  def change
    create_table :data_tables do |t|
      t.references :dashboard
      t.text :name
      t.jsonb :options, null: false

      t.timestamps
    end

    create_table :data_table_datasets do |t|
      t.references :data_table, null: false, index: true
      t.references :dataset, null: false, index: true
    end

    add_reference :widgets, :data_table, foreign_key: true
  end
end
