Rails.application.routes.draw do
  root to: "site#root"

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:show, :create, :destroy]
    resources :trips, only: [:create, :index, :update, :destroy]
    resources :users, only: [:show, :index, :update, :create]
    resources :references, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy, :update]
    resources :requests, only: [:create, :destroy, :index, :show, :update]
    resources :messages, only: [:create]
  end

  get "/auth/google_oauth2/callback", to: "api/sessions#omniauth"
  get "/guest_login", to: "api/users#guest_login"
end
