class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin, :password_digest
end
