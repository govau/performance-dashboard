class ClearDatasetColors < ActiveRecord::Migration[5.0]

  class Dataset < ActiveRecord::Base  
  end

  def up
    # We need to remove the colours because we only want them to have values
    # if they need to deviate from defaults.

    Dataset.update_all options: {}
  end

  def down 
  end
end
