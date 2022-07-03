class AirlinesController < ApplicationController
    def index
        airline=Airline.all 
        render json: airline

    end
end
