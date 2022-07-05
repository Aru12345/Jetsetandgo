class User < ApplicationRecord

    has_many :reviews
    has_many :airlines,through: :reviews 
    has_secure_password

    validates :name,presence: true,uniqueness: true
    validates :email, uniqueness: true

  def password(secret)



  end


    validate :must_have_prefered_email

   def must_have_prefered_email
       unless email.match?(/jetsetgo.com/)
            errors.add(:email,"Sorry we only allow specific mail provier")
            end
    end
end
