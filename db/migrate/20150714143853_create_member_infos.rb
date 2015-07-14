class CreateMemberInfos < ActiveRecord::Migration
  def change
    create_table :member_infos do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :gender, null: false
      t.date :birthday, null: false
      t.string :location, null: false
      t.string :hosting_status, null: false

      t.timestamps
    end
  end
end
