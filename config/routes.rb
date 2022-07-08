# config/routes.rb
Rails.application.routes.draw do

  resources :reviews,only: [:index,:show,:create,:update,:destroy]
  resources :airlines,only: [:index]
  resources :users,only: [:index,:create,:destroy]

  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"

  # route to test your configuration

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end