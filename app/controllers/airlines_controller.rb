class AirlinesController < ApplicationController
    def index
        airline=Airline.all 
        render json: airline,status: :ok

    end
end

#include: ['users','users.reviews']
#,include: ['users','users.airline.reviews']