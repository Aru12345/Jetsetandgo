class AirlinesController < ApplicationController
    def index
        airline=Airline.all 
        render json: airline,include: ['users','users.reviews'],status: :ok

    end
end
