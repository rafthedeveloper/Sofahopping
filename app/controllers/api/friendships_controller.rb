class Api::FriendshipsController < ApplicationController
  def create
    @friendship = current_user.requested_friendships.new(friend_params)

    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy!
    render json: @friendship
  end

  def update
    @friendship = current_user.requested_by_others.find(params[:id])

    if @friendship.update(update_friend_params)
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def friend_params
    params.require(:friendship).permit(:requestee_id)
  end

  def update_friend_params
    params.require(:friendship).permit(:pending_status)
  end
end
