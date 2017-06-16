class CreateDashboardsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :dashboards_users do |t|
      t.references :dashboard, :null => false, :index => true
      t.references :user, :null => false, :index => true
      t.timestamps
    end
  end
end
