class CreateTokens < ActiveRecord::Migration[5.0]
  def change
    create_table :tokens do |t|
      t.references :user, :index => true
      t.text       :token, :null => false
      t.boolean    :session, :null => false, :default => false
      t.timestamp  :expired_at, :null => true
      t.timestamps
    end

    add_index :tokens, :token, unique: true
    add_index :tokens, :expired_at

  end
end
