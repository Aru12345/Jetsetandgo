class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: [:login]
    def login
        user=User.find_by_email!(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id]=user.id
            render json: user,status: :ok
        else 
            render json: {error: "Invalid Password or Username"},status: :unauthorized

        end     
    end

    def logout
        session.delete(:user_id)
       
    end
    
end
    