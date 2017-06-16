class CreateDatasets < ActiveRecord::Migration[5.0]
  def change
    create_table :datasets do |t|
      t.references :organisation
      t.text       :name, :null => false
      t.text       :label, :null => false
      t.text       :units, :null => false
      t.text       :notes, :null => true
      t.timestamps
    end
  end
end
