class Api::RequestsController < ApplicationController
  def create
    @request = Request.new(request_params)

    if @request.save
    else
    end
  end

  def destroy
    @request = Request.find(params[:id])
    @request.destroy!
  end

  protected

  def request_params
    params.require(:request).permit(:requestee_id, :location, :message, :arrival_date,
    :departure_date, :num_guests )
  end
end
