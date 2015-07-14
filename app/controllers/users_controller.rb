class UsersController < ApplicationController

  def create
    @user = User.new(user_params)


    if @user.save
      sign_in(@user)
    else
    end

    redirect_to root_url
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :fname, :lname, :gender, :birthday, :location)
  end

end
