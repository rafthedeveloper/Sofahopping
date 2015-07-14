class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # render json: @user
    render :show
  end

  def index
  end

end
