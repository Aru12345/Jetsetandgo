class SessionsController < ApplicationController

    skip_before_action :authorized_user,only: [:login,]
    def create
        user=User.find_by(name:params[:email])
        if user&.authenticate(params[:password])
            session[:current_user]=user.id
            render json: user,status: :ok
        else 
            render json: {error: "Invalid Password or Username"},status: :unprocessable_entity

        end     
    end

    def destroy
        session.delete :current_user
        head :no_content
    end
    
end
    