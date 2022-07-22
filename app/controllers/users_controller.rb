class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create
     def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end
      def show
        render json: @current_user
      end

      def index
        user=User.all 
        render json: user

      end

    private     
    def user_params
        params.permit(:name,:email,:password)

    end
end
