class AddRequesterTypeToRequests < ActiveRecord::Migration
  def change
    add_column :requests, :requester_type, :string
  end
end
