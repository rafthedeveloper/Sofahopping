class AddColumnsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :arrival_date, :date, null: false
    add_column :trips, :departure_date, :date, null: false
    add_column :trips, :num_guests, :integer, null: false
  end
end
