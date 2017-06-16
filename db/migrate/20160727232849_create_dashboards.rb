class CreateDashboards < ActiveRecord::Migration[5.0]
  def change
    create_table :dashboards do |t|
      t.references  :organisation, :null => false
      t.text        :name, :null => false
      t.text        :description, :null => false
      t.text        :target_users, :null => false
      t.text        :notes, :null => true
      t.text        :url, :null => true
      t.boolean     :display_hero, :default => true, :null => false
      t.boolean     :display_kpis, :default => true, :null => false
      t.datetime    :published_at, :null => true
      t.timestamps
    end

    add_index :dashboards, :name, :unique => true
    add_index :dashboards, :published_at
  end
end
