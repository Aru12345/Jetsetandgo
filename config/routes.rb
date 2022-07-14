# config/routes.rb
Rails.application.routes.draw do

  resources :reviews,only: [:index,:show,:create,:update,:destroy]
  resources :airlines,only: [:index]
  
  #resources :users,only: [:create,:destroy]

  get "/u",to: "users#index"


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
 
end