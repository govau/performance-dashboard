class CreateWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :widgets do |t|
      t.references :dashboard, :null => false, :index => true
      t.integer    :row, :null => false, :limit => 2
      t.integer    :pos, :null => false, :limit => 2
      t.text       :name, :null => false
      t.text       :type, :null => false
      t.text       :size, :null => false
      t.text       :units, :null => false
      t.text       :description, :null => true
      t.text       :options, :null => true
      t.boolean    :is_hero, :default => false, :null => false
      t.timestamp  :last_updated_at, :null => false
      t.timestamps
    end

  end
end
