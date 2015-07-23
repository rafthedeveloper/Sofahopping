class AddNewColumnsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :arrival_date, :date
    add_column :trips, :departure_date,:date
    add_column :trips, :num_guests, :integer
  end
end
