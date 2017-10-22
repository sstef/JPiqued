class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :description
      t.integer :creator_id, null: false
      t.integer :pin_ids, array: true, default: []

      t.timestamps
    end
  end
end
