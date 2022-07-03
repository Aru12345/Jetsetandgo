class Airline < ApplicationRecord
    validates(:name, { :length => { :minimum => 3 } })
    validates(:slogan, { :length => { :minimum => 3 } })
end
