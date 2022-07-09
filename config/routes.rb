# config/routes.rb
Rails.application.routes.draw do

  resources :reviews,only: [:index,:show,:create,:update,:destroy]
  resources :airlines,only: [:index]
  resources :users,only: [:create,:destroy]


  get '/me', to: "users#show"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"

 
end