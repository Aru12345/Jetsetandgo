class ReviewsController < ApplicationController
  


    def index
        review=Review.all
        render json: review

    end
    def show
        review=Review.find(params[:id])
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
        params.permit(:image,:date,:description,:destination,:seat,:user_id,:airline_id)

    end

   
end
