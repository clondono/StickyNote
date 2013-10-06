class Post < ActiveRecord::Base
	
	belongs_to :user
	
	def user
		user
	end
 	
 	attr_accessible :content, :name, :title, :lastX, :lastY, :lastZ
end
