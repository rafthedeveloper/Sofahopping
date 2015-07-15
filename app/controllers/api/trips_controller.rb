class TripsController < ApplicationController
  def create

    @trip = Trip.new(trip_params)
  end

  def update
  end

  def destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:location, :description, :arrival_date, :departure_date, :num_guests);
  end
end
