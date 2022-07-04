class AirlineSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :slogan, :wlink

  has_many :users
  has_many :reviews
end
