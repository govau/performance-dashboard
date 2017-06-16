class CreateDataRows < ActiveRecord::Migration[5.0]
  def change
    create_table :data_rows do |t|
      t.references :data_table, null: false
      t.date :row_date, null: false
      t.jsonb :data, null: false
      t.timestamps
    end
  end
end
