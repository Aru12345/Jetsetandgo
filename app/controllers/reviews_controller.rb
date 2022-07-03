class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


    def index
        review=Review.all
        render json: review

    end
    def create
        review=Review.create!(review_params)
        render json: review,status: :created


    end

    def update
        review=Review.find(params[:id])
        review.update!(review_params)
        render json: review,status: :ok

    end

    def destroy
        review=Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private
    
    def review_params
        params.permit(:image,:date,:description,:destination,:seat)

    end

    def render_not_found
        render json: {error: "Review not found"},status: :not_found


    end
    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
end
