Rails.application.routes.draw do
  root to: "site#root"

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:show, :index]
  end
end
