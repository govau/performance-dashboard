class AddPasswordToDashboards < ActiveRecord::Migration[5.0]
  def change
    add_column :dashboards, :password, :string, :default => '', :limit => 10
  end
end
