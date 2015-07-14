class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    fail
    if @user.save
      sign_in(@user)
    else
      flash.now[:errors] = ["Invalid username or password"]
    end

    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def member_params
    params.require(:member).permit(:fname, :lname, :gender, :birthday, :location)
  end
end
