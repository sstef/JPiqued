class AddColumnsToBoard < ActiveRecord::Migration[5.1]
  def change
    add_column :boards, :category, :string
    add_column :boards, :secret, :boolean, default: false
  end
end
