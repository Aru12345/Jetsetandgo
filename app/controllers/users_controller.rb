class UsersController < ApplicationController

    def index
        user=User.all
        render json: user,include: ['airlines','airlines.reviews']
#include: ['users','users.reviews']

    end
    def create
        user=User.create(user_params)

    end

    private 
    
    def user_params
        params.permit(:name,:email)

    end
end
