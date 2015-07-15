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

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: { message: "Successfully updated your hosting status!" }
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :hosting_status, :location, :fname, :lname, :birthday, :gender)
  end

end
