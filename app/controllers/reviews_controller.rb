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
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review,status: :ok

    end
  
  def search
    a="paris"
  
    r= Review.all.select{|review| review.destination.downcase.include? a.downcase }
    r=Review.all.select{|review| review.description.downcase.include? a.downcase }
    byebug
    render json: r,status: :ok
    
    
  end
    

    def destroy
   
        review = @current_user.reviews.find(params[:id])
        if @current_user
        review.destroy
        else
            render json: {error: "Review of someone else."}, status: :not_found
        end
    end



    private
    
    def review_params
        params.permit(:image,:date,:description,:destination,:seat,:likes,:dislikes,:user_id,:airline_id)

    end
   
   
end
