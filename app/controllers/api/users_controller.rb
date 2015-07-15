class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    if params[:status]
     @users = User.where(hosting_status: params[:status])
     render :index
    elsif params[:trips]
      @travelers = Trip.find_all_travelers
      render :travelers
    else
      @users = User.all
      render :index
    end


  end

end
