class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: { user: @user }
  end

  def index
  end

end
