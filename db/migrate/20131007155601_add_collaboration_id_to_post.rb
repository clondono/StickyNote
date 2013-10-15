class AddCollaborationIdToPost < ActiveRecord::Migration
  def change
    add_column :posts, :collab_id, :integer
  end
end
