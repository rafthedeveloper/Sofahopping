class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false
      t.string :location, null: false
      t.string :message, null: false
      t.date :arrival_date, null: false
      t.date :departure_date, null: false
      t.integer :num_guests, null: false
    end

    add_index :requests, :requester_id
    add_index :requests, :requestee_id
  end
end
