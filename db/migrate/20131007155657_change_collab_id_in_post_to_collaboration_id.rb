class ChangeCollabIdInPostToCollaborationId < ActiveRecord::Migration
  def up
  	rename_column :posts, :collab_id, :collaboration_id

  end

  def down
  end
end
