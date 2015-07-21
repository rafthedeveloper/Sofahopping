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

  def index
    current_user
    render :index
  end

  def show
    @request = Request.find(params[:id])
    if @request.requester_id == current_user.id || @request.requestee_id == current_user.id
      render :show
    else
      render json: {}
    end
  end

  def update
    @request = Request.find(params[:id])

      if @request.update(request_params)
        render json: @request
      else
        render json: @request.errors.full_messages, status: :unprocessable_entity
      end

  end

  protected

  def request_params
    params.require(:request).permit(:requestee_id, :message, :arrival_date,
    :departure_date, :num_guests, :requester_type, :location, :status )
  end
end
