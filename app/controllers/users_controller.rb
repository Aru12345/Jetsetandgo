class UsersController < ApplicationController

    def index
        user=User.all
        render json: user,status: :ok
#include: ['users','users.reviews']
#user,include: ['airlines','airlines.reviews']

    end
    def create
        user=User.create!(user_params)
        render json: user,status: :created

    end

    private 
    
    def user_params
        params.permit(:name,:email,:password)

    end
end
