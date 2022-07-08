class UsersController < ApplicationController
    

    def index
        user=User.all
        render json: user,status: :ok
#include: ['users','users.reviews']
#user,include: ['airlines','airlines.reviews']

    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id # this is the piece that logs a user in
        render json: user, status: :created 
      end

    def show
      
       if current_user
            render json: current_user,status: :ok

        else
            render json: "No current user",status: :unauthorized
        end


    end

    private 
    
    def user_params
        params.permit(:name,:email,:password)

    end
end
