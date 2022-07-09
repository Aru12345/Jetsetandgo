# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authenticate_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
   
    def current_user
      User.find_by_id(session[:user_id])
     end

    def authorized_user
      return render json: {error: "Not Authorized"},status: :unauthorized unless current_user

    end

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

    private
    def authenticate_user
      render json: {error:"Not authorized"},status: :unauthorized unless current_user
    end
    def render_not_found
      render json: {error: "Review not found"},status: :not_found


  end
  def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  end