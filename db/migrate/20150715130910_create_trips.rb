class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :user_id, null: false
      t.string :location, null: false
      t.text :description, null: false
    end

    add_index(:trips, :user_id)
  end
end
