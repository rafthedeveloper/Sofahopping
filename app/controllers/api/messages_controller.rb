class Api::MessagesController < ApplicationController

  def create
    @message = Request.find(params[:request_id]).messages.new({content: params[:content]})
    @message.author_id = current_user.id

    if @message.save
      @user = User.find(current_user.id)
      render :show
    else
      render json: @message.errors.full_messages, status: :unprocessable_entity
    end
  end

end
