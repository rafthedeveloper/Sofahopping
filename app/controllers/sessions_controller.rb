class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
    else
      flash.now[:errors] = ["Invalid username or password"]
    end

    redirect_to root_url
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
