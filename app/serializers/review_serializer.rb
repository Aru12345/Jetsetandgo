class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :image, :date, :destination, :seat, :description, :likes, :dislikes
  
  has_one :user
  has_one :airline
end
