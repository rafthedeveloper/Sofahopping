class RemoveLocationFromTrips < ActiveRecord::Migration
  def change
    remove_column :trips, :location
  end
end
