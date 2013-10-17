class CollaborationController < ApplicationController
  
  def index
  end
  
  def create
        @post = current_user.posts.find(params[:post_id])
        @other_user = User.find_by_email(params[:email])
        @collab = @post.collaborations.create({:post_id => @post.id, :user_id => @other_user.id})

  end

  def destroy
  end
end
