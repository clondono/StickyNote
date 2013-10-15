class Post < ActiveRecord::Base
	
	belongs_to :creator, :class_name => "User", :foreign_key => "user_id"
	has_many :collaborations, dependent: :destroy
	has_many :collaborators, through: :collaboration, source: :user
	def user
		user
	end

 	attr_accessible :content, :name, :title, :lastX, :lastY, :lastZ
end
