class Airline < ApplicationRecord
    has_many :reviews
    has_many :users,through: :reviews

    
    validates(:name, { :length => { :minimum => 3 } })
    validates(:slogan, { :length => { :minimum => 3 } })
end
