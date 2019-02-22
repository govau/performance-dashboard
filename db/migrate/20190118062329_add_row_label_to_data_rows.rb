class AddRowLabelToDataRows < ActiveRecord::Migration[5.0]
  def change
    add_column :data_rows, :row_label, :string
  end
end
