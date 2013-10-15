class DropTableCollaboration < ActiveRecord::Migration
  def up
  	drop_table :collaborations
  end

  def down
  end
end
