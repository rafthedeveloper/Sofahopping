class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false, index: true
      t.integer :request_id, null: false, index: true
      t.text :content, null: false

      t.timestamps
    end
  end
end
