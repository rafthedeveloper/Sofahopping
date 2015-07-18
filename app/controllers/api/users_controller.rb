class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if params[:view] == "dashboard" && current_user && @user.id == current_user.id
      render :dashboard
      return
    elsif params[:view] == "profile" && current_user
      render :profile
      return
    end

    render json: { message: "It appears that you are not logged in." }
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

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end


  protected
  def user_params
    params.require(:user).permit(:username, :password, :fname, :lname, :gender, :birthday, :location)
  end

end
