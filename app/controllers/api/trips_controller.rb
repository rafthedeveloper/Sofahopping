class TripsController < ApplicationController
  def create

    @trip = current_user.trips.new(trip_params);

    if @trip.save
      redirect_to root_url
    else

    end
  end

  def update
    @trip =  Trip.find(params[:id])

    if @trip.update(trip_params)
    else
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy!
  end

  private

  def trip_params
    params.require(:trip).permit(:location, :description, :arrival_date, :departure_date, :num_guests);
  end
end
