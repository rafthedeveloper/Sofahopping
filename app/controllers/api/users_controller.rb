class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    if params[:status]
       @users = User.all.where(hosting_status: params[:status])
    else
      @users = User.all
    end

    render :index
  end

end
