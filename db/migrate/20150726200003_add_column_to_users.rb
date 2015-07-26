class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :is_guest, :boolean, default: false
  end
end
