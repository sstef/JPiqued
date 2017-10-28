class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :session_token
      t.string :password_digest, null: false
      t.integer :follows, array: true, default: []
      t.attachment :avatar

      t.timestamps
    end
    add_index :users, :name
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
