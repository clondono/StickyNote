class AddLastZToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :lastZ, :integer
  end
end
