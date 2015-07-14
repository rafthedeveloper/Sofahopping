Rails.application.routes.draw do
  root to: "site#root"

  resource :session, only: [:create, :destroy]
end
