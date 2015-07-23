class AddColumnsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :from, :string
    add_column :trips, :to, :string
  end
end
