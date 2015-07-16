class Api::TripsController < ApplicationController
  def create

    @trip = Trip.new(trip_params)
    @trip.user_id = current_user.id

    if @trip.save
      render json: @trip
    else
      render json: @trip.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @trip =  Trip.find(params[:id])
    if @trip.update(trip_params)
      render json: { message: "Successfully edited your trip!" }
    else
      render json: @trip.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy!
    render json: { message: "Successfully deleted trip, you can always add new ones!" }
  end

  private

  def trip_params
    params.require(:trip).permit(:location, :description, :arrival_date, :departure_date, :num_guests);
  end
end
