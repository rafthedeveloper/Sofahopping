class Api::RequestsController < ApplicationController
  def create
    @request = current_user.created_requests.new(request_params)


    if @request.save
      render json: @request
    else
      render json: @request.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @request = Request.find(params[:id])
    @request.destroy!
  end

  protected

  def request_params
    params.require(:request).permit(:requestee_id, :message, :arrival_date,
    :departure_date, :num_guests, :requester_type, :location )
  end
end
