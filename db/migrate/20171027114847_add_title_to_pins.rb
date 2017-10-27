class AddTitleToPins < ActiveRecord::Migration[5.1]
  def up
    add_column :pins, :title, :string

  end

end
