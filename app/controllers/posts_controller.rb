class PostsController < ApplicationController
  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    if user_signed_in?

      @post = current_user.posts.find(params[:id])
        
        if @post.user_id == current_user.id
          respond_to do |format|
            format.html # show.html.erb
            format.json { render json: @post }
          end
        else
          redirect_to action: 'index'
        end
    else
      redirect_to action: 'index'
    end  
  end

  # GET /posts/new
  # GET /posts/new.json
  def new
    if user_signed_in?

      @post = current_user.posts.new
      respond_to do |format|
        format.html # new.html.erb
        format.json { render json: @post }
        format.js { render json: @post}
      end
    else
      redirect_to action: 'index'
    end
  end

  # GET /posts/1/edit
  def edit
    if user_signed_in?

      @post = current_user.posts.find(params[:id])
      if @post.user_id == current_user.id
      else
        redirect_to action: 'index'
      end
    else
      redirect_to action: 'index'
    end  
  end

  # POST /posts
  # POST /posts.json
  def create
    if user_signed_in?

      @user = current_user
      @post = @user.posts.create(params[:post])
      # not sure if this is correct
      #@collab = @post.collaborations.create({:post_id => @post.id, :user_id => current_user.id})
      #@collab.user = current_user;
      respond_to do |format|
        if @post.save
          format.json { render json: @post, status: :created, location: @post }

        else
          format.html { render action: "new" }
          format.json { render json: @post.errors, status: :unprocessable_entity }
          format.js { render json: @post.errors, status: :unprocessable_entity }

        end
      end
    else
      redirect_to action: 'index'
    end
  end

  # PUT /posts/1
  # PUT /posts/1.json
  def update
    if user_signed_in?
      
      @post = current_user.posts.find(params[:id])
      @proj = nil || current_user.projects.find_by_id(@post.id) 
      if @post.user_id == current_user.id || @proj != nil
        respond_to do |format|
          if @post.update_attributes(params[:post])
            format.html { redirect_to @post, notice: 'Post was successfully updated.' }
            format.json { head :no_content }
          else
            format.html { render action: "edit" }
            format.json { render json: @post.errors, status: :unprocessable_entity }
          end
        end
      else
        redirect_to action: 'index'
      end
    else
      redirect_to action: 'index'
    end  
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    
    if user_signed_in?
      @post = current_user.posts.find(params[:id])
      @proj = current_user.projects.find_by_id(@post.id) || nil

      if current_user == @post.creator
        @post.destroy

        respond_to do |format|
          format.html { redirect_to posts_url }
          format.json { head :no_content }
          format.js { head :no_content}
        end

      elsif @proj != nil
        current_user.collaborations.find_by_post_id(@post.id).destroy
        respond_to do |format|
          format.html { redirect_to posts_url }
          format.json { head :no_content }
          format.js { head :no_content}
        end

      else      
        redirect_to action: 'index'
      end
    else
      redirect_to action: 'index'
    end     
  end
end
