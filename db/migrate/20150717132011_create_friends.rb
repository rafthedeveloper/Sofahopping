class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false
      t.string  :pending_status, null: false
    end

      add_index :friendships, [:requester_id, :requestee_id], unique: true
  end
end
