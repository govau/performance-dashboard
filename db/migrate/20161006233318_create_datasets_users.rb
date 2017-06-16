class CreateDatasetsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :datasets_users do |t|
      t.references :dataset, :null => false, :index => true
      t.references :user, :null => false, :index => true
      t.timestamps
    end
  end
end
