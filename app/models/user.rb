class User < ActiveRecord::Base
  

	has_many :posts
	has_many :collaborations, dependent: :destroy
	has_many :projects, class_name: 'Post', through: :collaborations, source: :post
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	     :recoverable, :rememberable, :trackable, :validatable, :token_authenticatable

	# Setup accessible (or protected) attributes for your model
	attr_accessible :email, :password, :password_confirmation, :remember_me
	# attr_accessible :title, :body


end
