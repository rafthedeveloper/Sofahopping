class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    if params[:status]
       @users = User.where(hosting_status: params[:status])
    elsif params[:trips]
      @users = Trip.find_all_travelers
    else
      @users = User.all
    end

    render :index
  end

end
