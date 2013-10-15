class DropCollaborationIdFromPost < ActiveRecord::Migration
  def up
  	    remove_column :posts, :collaboration_id
  end

  def down
  end
end
