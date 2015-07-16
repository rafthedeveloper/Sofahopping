Rails.application.routes.draw do
  root to: "site#root"

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]

  namespace :api, defaults: {format: :json} do
    resources :trips, only: [:create, :index, :update, :destroy]
    resources :users, only: [:show, :index, :update]
  end
end
