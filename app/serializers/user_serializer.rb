class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin

  has_many :airlines 
  has_many :reviews
end
