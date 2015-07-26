class Api::UsersController < ApplicationController

  def show
    if params[:view] == "dashboard"
      @user = User.includes(:trips, friend_requests_received: :friend_requester)
                  .where(id: current_user.id).first
      render :dashboard

    elsif params[:view] == "profile"
      @user = User.includes(:received_references, :requested_friendships)
                  .includes(friend_requests_received: :friend_requester)
                  .includes(friend_requests_received: :friend_requestee)
                  .includes(requested_friendships: :friend_requester)
                  .includes(requested_friendships: :friend_requestee)
                  .where(id: params[:id]).first
      render :profile

    else
      @user = User.includes(friend_requests_received: :friend_requester)
                  .includes(friend_requests_received: :friend_requestee)
                  .includes(requested_friendships: :friend_requester)
                  .includes(requested_friendships: :friend_requestee)
                  .where(id: params[:id]).first
      render :show
    end

  end

  def index
    if params[:status]
     @users = User.includes(:received_references).where(hosting_status: params[:status])
     @users = @users.search_by_location(params[:query]) if params[:query] != "none"
     render :index
    elsif params[:trips]
      @trips = Trip.includes(:traveler).where("user_id != ?", current_user.id)
      @trips = @trips.search_by_location(params[:query]) if params[:query] != "none"
      render :travelers
    else
      if params[:query] == "none"
        @users = User.includes(:received_references).all
                     .page(params[:page]).per(20)
      else
        @users = User.includes(:received_references)
                     .search_by_location(params[:query])
                     .page(params[:page]).per(20)

      end
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

  def guest_login
    user = User.create_guest_account
    sign_in!(user)
    redirect_to "#"
  end


  protected
  def user_params
    params.require(:user).permit(:avatar, :username, :password, :fname, :lname, :gender, :birthday, :location, :hosting_status)
  end

end
