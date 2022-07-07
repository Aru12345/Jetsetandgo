# config/routes.rb
Rails.application.routes.draw do

  resources :reviews,only: [:index,:show,:create,:update,:destroy]
  resources :airlines,only: [:index]
  resources :users,only: [:index,:create,:destroy]

 post '/login',to: 'session#create'
 get '/me', to: 'users#show'
 delete '/logout', to: 'sessions#destroy'
 get '/signup', to: "users#create"

  # route to test your configuration

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end