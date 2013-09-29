class AddCoordToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :lastX, :integer
    add_column :posts, :lastY, :integer
  end
end
