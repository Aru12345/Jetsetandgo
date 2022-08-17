class AirlinesController < ApplicationController
    def index
        airline=Airline.all 
        render json: airline,status: :ok

    end

def search
a=Airline.where("name LIKE?","%"+PARAMS[:q]+"%")
render json: a,status: :ok

end
   
end

#include: ['users','users.reviews']
#,include: ['users','users.airline.reviews']
