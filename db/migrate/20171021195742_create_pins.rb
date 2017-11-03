class CreatePins < ActiveRecord::Migration[5.1]
  def change
    create_table :pins do |t|
      t.text :description, null: false
      t.string :link_url
      t.integer :board_id
      t.integer :creator_id, null: false
      t.string :keywords, array: true, default: []
      t.string :title
      t.attachment :image

      t.timestamps
    end
  end
end
