class AddColumnsToRequests < ActiveRecord::Migration
  def change
    add_column :requests, :status, :string, null: false
  end
end
