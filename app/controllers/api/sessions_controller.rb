class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def create
    user = User.find_by_credentials(
                  params[:user][:username],
                  params[:user][:password])

    if user.nil?
      head :unprocessable_entity
    else
      sign_in!(user)
      render :show
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
