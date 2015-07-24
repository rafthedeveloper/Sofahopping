class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:trips, :requested_friendships,
                          :requested_by_others, :received_requests, :received_references)
                          .where(id: params[:id]).first

    if @user && params[:view] == "dashboard" && current_user
      render :dashboard
    elsif @user && params[:view] == "profile" && current_user
      render :profile
    end

  end

  def index
    if params[:status]
     @users = User.includes(:received_references).where(hosting_status: params[:status])
     @users = @users.search_by_location(params[:query]) if params[:query] != "none"
     render :index
    elsif params[:trips]
      @trips = Trip.includes(:traveler).all
      @trips = @trips.search_by_location(params[:query]) if params[:query] != "none"
      render :travelers
    else
      @users = User.includes(:received_references).all
      @users = @users.search_by_location(params[:query]) if params[:query] != "none"
      render :index
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      hosting_status = "Accepting Guests" if @user.hosting_status == "yes"
      hosting_status = "Maybe Accepting Guests" if @user.hosting_status == "maybe"
      hosting_status = "Not Accepting Guests" if @user.hosting_status == "no"
      render json: { message: "Successfully updated your hosting status to '#{hosting_status}'" }
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
    params.require(:user).permit(:avatar, :username, :password, :fname, :lname, :gender, :birthday, :location, :hosting_status)
  end

end
